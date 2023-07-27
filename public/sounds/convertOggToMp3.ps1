
# Get a list of .ogg files in the current directory
$oggFiles = Get-ChildItem -Filter "*.ogg"

# Loop through each .ogg file and convert it to .mp3
foreach ($oggFile in $oggFiles) {
  # Get the file name without extension
  $baseName = [System.IO.Path]::GetFileNameWithoutExtension($oggFile.Name)

  # Set the output file path with .mp3 extension
  $mp3Output = Join-Path $oggFile.DirectoryName "$baseName.mp3"

  # Convert the .ogg file to .mp3 using ffmpeg
  & "ffmpeg.exe" -i $oggFile.FullName $mp3Output

  Write-Host "Converted $($oggFile.Name) to $(Get-Item $mp3Output).Name"
}

Write-Host "Conversion completed."
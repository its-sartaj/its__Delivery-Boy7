while ($true) {
    Write-Host "Starting SSH tunnel..."
    ssh -o ServerAliveInterval=15 -o ServerAliveCountMax=3 -o StrictHostKeyChecking=no -R 80:127.0.0.1:3000 serveo.net
    Start-Sleep -Seconds 2
}

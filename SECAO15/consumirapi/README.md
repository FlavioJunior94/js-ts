** Para resolver problema de compatibilidade com node17 ou superior no windows **

mudar o Start parar:   "start": "NODE_OPTIONS=--openssl-legacy-provider react-scripts start"

ou rodar $env:NODE_OPTIONS = "--openssl-legacy-provider" no powershell

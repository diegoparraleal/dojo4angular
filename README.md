# dojo4angular

Please download the original repository with only the server service, in order to start the dojo using
git clone https://github.com/diegoparraleal/dojo4angular.git --branch original

*SERVER SERVICE*
1. Download *dotnet CORE SDK*, if you want to run server service
    https://www.microsoft.com/net/core#windowscmd
    Note: I'm running 1.0.3 version
2. Download and install Visual Studio Code 
    https://code.visualstudio.com/Download 
3. Install C#, extension (Inside VSCodedotnet)
4. Run in console
     dotnet new webapi
     dotnet restore (to download dependencies)
     dotnet build (to compile)
5. Edit Controllers, in the way you want
6. Run the app
    In this this case  ...
    dotnet run 
    browse http://localhost:5000/api/items



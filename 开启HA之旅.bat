@echo off

rem 设置系统环境
set PYTHON_PATH=%cd%\Prerequisites\Python37
set PYTHON_SCRIPTS_PATH=%PYTHON_PATH%\Scripts
set NODE_PATH=%cd%\Prerequisites\Nodejs

rem 设置配置文件环境
set HASS_CONFIG_PATH=%cd%\Config\hass_config
set NODE_RED_CONFIG_PATH=%cd%\Config\node_red_config

>"%tmp%\t.t" echo;WSH.Echo(/[\u4E00-\u9FFF]/.test(WSH.Arguments(0)))
for /f %%a in ('cscript -nologo -e:jscript "%tmp%\t.t" "%PYTHON_PATH%"') do if %%a neq 0 (
color cf&echo;当前运行环境 %PYTHON_PATH%&echo;!!!请不要在中文目录下使用!!!&echo;&pause&EXIT /B) else (goto Start)

rem |管道符,参数传递给下一句
rem ||代表上一句执行失败,然后做什么
rem &&代表上一句执行成功,然后做什么
rem &连接符

:Start
set PATH=%PYTHON_PATH%;%PYTHON_SCRIPTS_PATH%;%NODE_PATH%;%PATH%
color f5
MODE con: Cols=68 Lines=30
set var=0
echo 正在初始化(版本检测)，请稍后...

title Home Assistant 新手体验套装
for /f "delims=" %%i in ('python %PYTHON_SCRIPTS_PATH%\check.py') do set hass_version=%%i

:Menu
cls
echo.
::for /f "delims=" %%i in ('python -m homeassistant --version') do echo 「 Home Assistant 新手体验套装 」  版本号 %%i
echo  「 Home Assistant 新手体验套装 」
echo.  
echo   如何使用？
echo   第①步 → 输入数字 ，回车
echo   第②步 → 浏览器访问对应的网址 ：
echo.  
echo   Home Assistant   :   http://localhost:8123
echo   Node-Red         :   http://localhost:1880
echo.  
echo                                来自瀚思彼岸论坛 bbs.hassbian.com
echo -----------------------------------------------------------------
echo 菜单:
echo       (1)  启动 Home Assistant
echo.
echo       (2)  启动 Home Assistant 和 Node-Red
echo.
echo       (3)  重置 Home Assistant 用户账户
echo.
echo       (4)  升级 Home Assistant [ %hass_version% ]
echo.
echo       (5)  升级 Node-Red
echo.
echo       (q)  退出
echo.
echo -----------------------------------------------------------------
if %var% neq 0 echo 输入无效请重新输入! 
set choice=
set /p choice=请输入 : 
set "choice=%choice:"=%"
if "%choice:~-1%"=="=" goto Menu
if "%choice%"=="" goto Menu
if /i "%choice%" == "1" cls&goto Run-hass
if /i "%choice%" == "2" cls&goto Run-hass-nodered
if /i "%choice%" == "3" cls&goto Reset-user
if /i "%choice%" == "4" cls&goto Upgrade-hass
if /i "%choice%" == "5" cls&goto Upgrade-nodered
if /i "%choice%" == "q" Popd&Exit
set var=1
goto Menu

:Run-hass
::python %HASS_CONFIG_PATH%\hass-configurator\configurator.py | python -m homeassistant --config %HASS_CONFIG_PATH%
title Home Assistant
python -m homeassistant --config %HASS_CONFIG_PATH%
echo.&Pause
goto End

:Run-hass-nodered
title Home Assistant
rem 设置node-red环境
set NODE_RED=%NODE_PATH%\node_global\node_modules\node-red\red.js
python -m homeassistant --config %HASS_CONFIG_PATH% | start "" cmd /k "color f5 && NODE %NODE_RED% --userDir %NODE_RED_CONFIG_PATH%"
echo.&Pause
goto End

:Reset-user
del %HASS_CONFIG_PATH%\.storage\auth %HASS_CONFIG_PATH%\.storage\auth_provider.homeassistant %HASS_CONFIG_PATH%\.storage\onboarding
goto End

:Upgrade-hass
python -m pip install --upgrade homeassistant
echo.&Pause
goto End

:Upgrade-nodered
rem 设置NPM环境
set NPM_CLI_JS=%NODE_PATH%\node_modules\npm\bin\npm-cli.js
rem 升级NPM
::NODE %NPM_CLI_JS% --userconfig %NODE_PATH%\\.npmrc install npm
rem 升级node-red
NODE %NPM_CLI_JS% --userconfig %NODE_PATH%\\.npmrc upgrade -g node-red
rem 清理缓存
NODE %NPM_CLI_JS% --userconfig %NODE_PATH%\\.npmrc cache clean -f
echo.&Pause
goto End

:End
if "%choice%" neq "" (
    cls
    if "%choice%" neq "3" (
        echo 操作完成 !!!
        if exist %WINDIR%\System32\timeout.exe (timeout /t 2) else (if exist %WINDIR%\System32\choice.exe (choice /t 2 /d y /n >nul) else (ping 127.1 -n 2 >nul))
    )
    goto Start
)
@echo off

rem ����ϵͳ����
set PYTHON_PATH=%cd%\Prerequisites\Python37
set PYTHON_SCRIPTS_PATH=%PYTHON_PATH%\Scripts
set NODE_PATH=%cd%\Prerequisites\Nodejs

rem ���������ļ�����
set HASS_CONFIG_PATH=%cd%\Config\hass_config
set NODE_RED_CONFIG_PATH=%cd%\Config\node_red_config

>"%tmp%\t.t" echo;WSH.Echo(/[\u4E00-\u9FFF]/.test(WSH.Arguments(0)))
for /f %%a in ('cscript -nologo -e:jscript "%tmp%\t.t" "%PYTHON_PATH%"') do if %%a neq 0 (
color cf&echo;��ǰ���л��� %PYTHON_PATH%&echo;!!!�벻Ҫ������Ŀ¼��ʹ��!!!&echo;&pause&EXIT /B) else (goto Start)

rem |�ܵ���,�������ݸ���һ��
rem ||������һ��ִ��ʧ��,Ȼ����ʲô
rem &&������һ��ִ�гɹ�,Ȼ����ʲô
rem &���ӷ�

:Start
set PATH=%PYTHON_PATH%;%PYTHON_SCRIPTS_PATH%;%NODE_PATH%;%PATH%
color f5
MODE con: Cols=68 Lines=30
set var=0
echo ���ڳ�ʼ��(�汾���)�����Ժ�...

title Home Assistant ����������װ
for /f "delims=" %%i in ('python %PYTHON_SCRIPTS_PATH%\check.py') do set hass_version=%%i

:Menu
cls
echo.
::for /f "delims=" %%i in ('python -m homeassistant --version') do echo �� Home Assistant ����������װ ��  �汾�� %%i
echo  �� Home Assistant ����������װ ��
echo.  
echo   ���ʹ�ã�
echo   �ڢٲ� �� �������� ���س�
echo   �ڢڲ� �� ��������ʶ�Ӧ����ַ ��
echo.  
echo   Home Assistant   :   http://localhost:8123
echo   Node-Red         :   http://localhost:1880
echo.  
echo                                �����˼�˰���̳ bbs.hassbian.com
echo -----------------------------------------------------------------
echo �˵�:
echo       (1)  ���� Home Assistant
echo.
echo       (2)  ���� Home Assistant �� Node-Red
echo.
echo       (3)  ���� Home Assistant �û��˻�
echo.
echo       (4)  ���� Home Assistant [ %hass_version% ]
echo.
echo       (5)  ���� Node-Red
echo.
echo       (q)  �˳�
echo.
echo -----------------------------------------------------------------
if %var% neq 0 echo ������Ч����������! 
set choice=
set /p choice=������ : 
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
rem ����node-red����
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
rem ����NPM����
set NPM_CLI_JS=%NODE_PATH%\node_modules\npm\bin\npm-cli.js
rem ����NPM
::NODE %NPM_CLI_JS% --userconfig %NODE_PATH%\\.npmrc install npm
rem ����node-red
NODE %NPM_CLI_JS% --userconfig %NODE_PATH%\\.npmrc upgrade -g node-red
rem ������
NODE %NPM_CLI_JS% --userconfig %NODE_PATH%\\.npmrc cache clean -f
echo.&Pause
goto End

:End
if "%choice%" neq "" (
    cls
    if "%choice%" neq "3" (
        echo ������� !!!
        if exist %WINDIR%\System32\timeout.exe (timeout /t 2) else (if exist %WINDIR%\System32\choice.exe (choice /t 2 /d y /n >nul) else (ping 127.1 -n 2 >nul))
    )
    goto Start
)
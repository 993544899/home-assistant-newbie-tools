@echo off
title Home Assistant ����������װ -- ʹ�û�����ʼ��

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

:Start
set PATH=%PYTHON_PATH%;%PYTHON_SCRIPTS_PATH%;%NODE_PATH%;%PATH%
color f5
MODE con: Cols=68 Lines=30
echo ���ڳ�ʼ�������Ժ�...
echo.
echo ����pip...
python -m pip install --upgrade pip
echo.
echo ����npm����...
rem ����NPM����
set NPM_CLI_JS=%NODE_PATH%\node_modules\npm\bin\npm-cli.js
NODE %NPM_CLI_JS% --userconfig %NODE_PATH%\\.npmrc config set prefix="%NODE_PATH%\node_global"
NODE %NPM_CLI_JS% --userconfig %NODE_PATH%\\.npmrc config set cache="%NODE_PATH%\node_cache"
NODE %NPM_CLI_JS% --userconfig %NODE_PATH%\\.npmrc config set registry="https://registry.npm.taobao.org"
rem ����node-red����
set NODE_RED=%NODE_PATH%\node_global\node_modules\node-red\red.js
echo.
echo ��������汾��...
for /f "delims=" %%i in ('python -V') do echo Python �汾��: %%i
for /f "delims=" %%i in ('python -m homeassistant --version') do echo Home Assistant �汾��: %%i
for /f "delims=" %%i in ('node -v') do echo Nodejs �汾��: %%i
for /f "delims=" %%i in ('NODE %NPM_CLI_JS% -v') do echo npm �汾��: %%i
for /f "delims=" %%i in ('NODE %NPM_CLI_JS% --userconfig %NODE_PATH%\\.npmrc ls node-red -g') do set node-red=%%i
echo node-red �汾��: %node-red:~-7%
echo.
pause&EXIT

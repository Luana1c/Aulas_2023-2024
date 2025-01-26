@echo off
color 5f

:interface

cls

echo:
echo =================================================================
echo =                                                               =
echo =                         ESCOLHA DE MENU                       =
echo =    1) Calculadora                                             =
echo =                           2) notepad                          =
echo =                                           3)Sair              =
echo =================================================================


choice /c "123" /n /m "Escolha uma opcao:"
goto %errorlevel%

:1
start calc.exe
goto interface

:2
start notepad.exe
goto interface

:3
exit 

pause >nul
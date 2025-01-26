@echo off 
color 5f

title = Calculadora

set /p operador=Digite o operador: 
set /p n1=Digite o primeiro numero: 
set /p n2=Digite segundo numero:  
set /a resultado= %n1% %operador% %n2%

cls

echo  %n1% %operador% %n2% = %resultado%


pause >nul 
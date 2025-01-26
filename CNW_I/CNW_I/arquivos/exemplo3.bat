@echo off

set  /p nome=Digite seu nome 

echo Seu nome e: %nome:a=k%

pause >nul

@REM para alterar mais de uma vez tem que alterar o set antigo, ex: set nome_novo= %nome_novo:l=z%
@REM dois pontos, o caracter, igual ao que voce quer. ex: %nome: a=k%




@REM para extrair usa ~ apartir do zero no mesmo sistema de substituir letra (acima). caso queiroos ultimos coloque ~-4
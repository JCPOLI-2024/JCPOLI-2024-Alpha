# Site da JCPOLI 2024/1 

Para iniciar o código:

npm i -> instalar os módulos de NPM

$env:NODE_OPTIONS = "--openssl-legacy-provider" -> resolver dependencias de pacotes legado.

npm run serve (com dev dependecies / hot reload) -> rodar no local host.

Sobre esse código:

Ele compoe o projeto de atualizar o site da JCPOLI. Inicialmente foi desenvolvido para ser um único site junto com o da Politécnica.
Porém, devido a uma má comunicação entre partes responsaveis pelos projetos e sites, essa ideia foi descartada. 
Assim, decidiu-se manter todas as atualizações novas para a JCPOLI, mas sem integrar com a Politécnica.
No geral, as atualizações feitas foram as seguintes:
-Histórico edições anteriores (1º e 2º JCPOLI)
-Layout novo para fotos dos palestrantes na página de descrição das palestras, minicursos e ciencia em casa
-Adição de novas abas
-Layout responsivo no cellular
-Melhorar o código, tentando ao máximo focar na otimação na medida do possível, eliminando redundâncias e adicionando comentários ao máximo 
Até o momento, a unica que ainda não foi realizada foi a integração com um banco de dados externo


const texto = `João foi ao mercado, onde João comprou frutas e verduras. Depois, João foi 
até a padaria e comprou pães fresquinhos. No final do dia, João estava feliz com suas compras.
João sempre gosta de aproveitar o dia da melhor forma possível.
João, depois de um longo dia, resolveu dar um passeio pelo parque. Ele encontrou alguns amigos por lá e,
claro, Joãooo não poderia deixar de conversar com todos. Entre risadas e histórias, João percebeu como é bom
aproveitar os pequenos momentos. No caminho de volta para casa, João pensava em como a vida é cheia de surpresas e,
mais uma vez, João se sentiu grato pelas oportunidades que teve.
jooooooooooooãoooooo`;

const arquivos =[
    'Foto.jpg',
    'imagem.JPG',
    'Festa.JPEG',
    'gatos.jpeg',
    'cachorros.jpg',
    'note.txt'
];

//            <*>     *    </*><*>     *     </*>
//            <.+>    .+    <\/.+><*>     *     </*>
const html = '<p>Olá Mundo</p> <p>Olá de novo</p> <div>Sou a div</div>';

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz !%@$#&*(¨( 0987654321';

const cpfs = `
os cpfs são:
123.456.789-01 087.654.321-02 345.678.901-03 567.890.123-04 210.987.654-05
`;

const cpfs2 = `254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00`;

const html2 = `<p 
data-teste='teste' 
class="teste teste">
  Olá mundo
</p> <p>Olá mundo</p> <div>Sou a div</div>`;

const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

module.exports ={
    texto,
    arquivos,
    html,
    html2,
    alfabeto, 
    cpfs, 
    cpfs2,
    lookahead
};



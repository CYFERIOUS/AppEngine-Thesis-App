// JavaScript Document



var semestral = new Array(9);
semestral[0]="(1)PRIMER  SEMESTRE";
semestral[1]="(2)SEGUNDO SEMESTRE";
semestral[2]="(3)TERCER  SEMESTRE";
semestral[3]="(4)CUARTO  SEMESTRE";
semestral[4]="(5)QUINTO  SEMESTRE";
semestral[5]="(6)SEXTO   SEMESTRE";
semestral[6]="(7)SEPTIMO SEMESTRE";
semestral[7]="(8)OCTAVO  SEMESTRE";
semestral[8]="(9)NOVENO  SEMESTRE";
semestral[9]="(10)DECIMO SEMESTRE";

var areae = new Array(5);
areae[0]="CIENCIAS BASICAS";
areae[1]="CIENCIAS DE LA INGENIERIA";
areae[2]="INGENIERIA APLICADA";
areae[3]="ECONOMICO ADMINISTRATIVA";
areae[4]="SOCIO HUMANISTICA";
areae[5]="COMPLEMENTARIA";

var signarum = new Array(54);
signarum[0]="MATEMATICAS BASICAS";
signarum[1]="PROGRAMACION 1";
signarum[2]="EXPRESION GRAFICA";
signarum[3]="INTRODUCCION A LA INGENIERIA";
signarum[4]="METODOLOGIA DE LA INVESTIGACI&Oacute;N";
signarum[5]="CATEDRA NEOGRANADINA";
signarum[6]="ETICA";
signarum[7]="CALCULO DIFERENCIAL";
signarum[8]="FISICA MECANICA";
signarum[9]="QUIMICA";
signarum[10]="PROGRAMACION 2";
signarum[11]="EXTENSION CULTURAL Y DEPORTIVA";
signarum[12]="CALCULO INTEGRAL";
signarum[13]="FISICA ELECTRICIDAD Y MAGNETISMO";
signarum[14]="ALGEBRA LINEAL";
signarum[15]="PROGRAMACION 3";
signarum[16]="HISTORIA DEL ARTE";
signarum[17]="CALCULO VECTORIAL";
signarum[18]="FISICA OPTICA Y ACUSTICA";
signarum[19]="DIBUJO";
signarum[20]="TALLER DIGITAL DE DISEÑO";
signarum[21]="INTRODUCCION A LA COMPUTACION GRAFICA";
signarum[22]="ECUACIONES DIFERENCIALES";
signarum[23]="PROBABILIDAD Y ESTADISTICA";
signarum[24]="ANIMACION 2D";
signarum[25]="COMPUTACION GRAFICA";
signarum[26]="GUIONES";
signarum[27]="PRINCIPIOS CONSTITUCIONALES";
signarum[28]="METODOS NUMERICOS";
signarum[29]="MODELADO 3D";
signarum[30]="DISEÑO 1";
signarum[31]="PROCESAMIENTO DE SEÑALES";
signarum[32]="INGENIERIA DE SOFTWARE";
signarum[33]="ANIMACION 3D Y DINAMICAS";
signarum[34]="SIMULACION";
signarum[35]="DISEÑO 2";
signarum[36]="PROCESAMIENTO DE IMAGENES";
signarum[37]="TECNOLOGIAS DE INTERNET";
signarum[38]="SEMINARIO DE INVESTIGACION";
signarum[39]="RENDER";
signarum[40]="INTELIGENCIA ARTIFICIAL";
signarum[41]="DISEÑO 3";
signarum[42]="ELECTIVA";
signarum[43]="AUDIO Y VIDEO";
signarum[44]="APLICACIONES 3D";
signarum[45]="ELECTIVA DE ENFASIS 1";
signarum[46]="INTEGRACION MULTIMEDIA";
signarum[47]="ECONOMIA Y FINANZAS";
signarum[48]="GESTION EMPRESARIAL";
signarum[49]="GESTION INTEGRAL DE PROYECTOS";
signarum[50]="ELECTIVA DE ENFASIS 2";
signarum[51]="ELECTIVA DE ENFASIS 3";
signarum[52]="ELECTIVA DE ENFASIS 4";
signarum[53]="ELECTIVA DE ENFASIS 5";


var codice = new Array(54);
codice[0]="100101";
codice[1]="10101";
codice[2]="1137";
codice[3]="1836";
codice[4]="24024";
codice[5]="100302";
codice[6]="100301";
codice[7]="100102";
codice[8]="0000";
codice[9]="0000";
codice[10]="0000";
codice[11]="0000";
codice[12]="0000";
codice[13]="0000";
codice[14]="0000";
codice[15]="0000";
codice[16]="0000";
codice[17]="0000";
codice[18]="0000";
codice[19]="0000";
codice[20]="0000";
codice[21]="0000";
codice[22]="0000";
codice[23]="0000";
codice[24]="0000";
codice[25]="0000";
codice[26]="0000";
codice[27]="0000";
codice[28]="0000";
codice[29]="0000";
codice[30]="0000";
codice[31]="0000";
codice[32]="0000";
codice[33]="0000";
codice[34]="0000";
codice[35]="0000";
codice[36]="0000";
codice[37]="0000";
codice[38]="0000";
codice[39]="0000";
codice[40]="0000";
codice[41]="0000";
codice[42]="0000";
codice[43]="0000";
codice[44]="0000";
codice[45]="0000";
codice[46]="0000";
codice[47]="0000";
codice[48]="0000";
codice[49]="0000";
codice[50]="0000";
codice[51]="0000";
codice[52]="0000";
codice[53]="0000";

var visa = new Array(54);
visa[0]="4";
visa[1]="3";
visa[2]="2";
visa[3]="2";
visa[4]="2";
visa[5]="1";
visa[6]="2";
visa[7]="0";
visa[8]="0";
visa[9]="0";
visa[10]="0";
visa[11]="0";
visa[12]="0";
visa[13]="0";
visa[14]="0";
visa[15]="0";
visa[16]="0";
visa[17]="0";
visa[18]="0";
visa[19]="0";
visa[20]="0";
visa[21]="0";
visa[22]="0";
visa[23]="0";
visa[24]="0";
visa[25]="0";
visa[26]="0";
visa[27]="0";
visa[28]="0";
visa[29]="0";
visa[30]="0";
visa[31]="0";
visa[32]="0";
visa[33]="0";
visa[34]="0";
visa[35]="0";
visa[36]="0";
visa[37]="0";
visa[38]="0";
visa[39]="0";
visa[40]="0";
visa[41]="0";
visa[42]="0";
visa[43]="0";
visa[44]="0";
visa[45]="0";
visa[46]="0";
visa[47]="0";
visa[48]="0";
visa[49]="0";
visa[50]="0";
visa[51]="0";
visa[52]="0";
visa[53]="0";





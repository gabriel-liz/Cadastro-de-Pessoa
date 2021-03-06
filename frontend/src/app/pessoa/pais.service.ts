import {Injectable} from '@angular/core';

@Injectable()
export class PaisService {

  constructor() {}

  public getPaises() {
    return [
      {"id": "", "nome": ""},
      {"id": "AF", "nome": "Afeganistão"},
      {"id": "ZA", "nome": "África do Sul"},
      {"id": "AX", "nome": "Åland, Ilhas"},
      {"id": "AL", "nome": "Albânia"},
      {"id": "DE", "nome": "Alemanha"},
      {"id": "AD", "nome": "Andorra"},
      {"id": "AO", "nome": "Angola"},
      {"id": "AI", "nome": "Anguilla"},
      {"id": "AQ", "nome": "Antárctida"},
      {"id": "AG", "nome": "Antigua e Barbuda"},
      {"id": "AN", "nome": "Antilhas Holandesas"},
      {"id": "SA", "nome": "Arábia Saudita"},
      {"id": "DZ", "nome": "Argélia"},
      {"id": "AR", "nome": "Argentina"},
      {"id": "AM", "nome": "Arménia"},
      {"id": "AW", "nome": "Aruba"},
      {"id": "AU", "nome": "Austrália"},
      {"id": "AT", "nome": "Áustria"},
      {"id": "AZ", "nome": "Azerbeijão"},
      {"id": "BS", "nome": "Bahamas"},
      {"id": "BH", "nome": "Bahrain"},
      {"id": "BD", "nome": "Bangladesh"},
      {"id": "BB", "nome": "Barbados"},
      {"id": "BE", "nome": "Bélgica"},
      {"id": "BZ", "nome": "Belize"},
      {"id": "BJ", "nome": "Benin"},
      {"id": "BM", "nome": "Bermuda"},
      {"id": "BY", "nome": "Bielo-Rússia"},
      {"id": "BO", "nome": "Bolívia"},
      {"id": "BA", "nome": "Bósnia-Herzegovina"},
      {"id": "BW", "nome": "Botswana"},
      {"id": "BV", "nome": "Bouvet, Ilha"},
      {"id": "BR", "nome": "Brasil"},
      {"id": "BN", "nome": "Brunei"},
      {"id": "BG", "nome": "Bulgária"},
      {"id": "BF", "nome": "Burkina Faso"},
      {"id": "BI", "nome": "Burundi"},
      {"id": "BT", "nome": "Butão"},
      {"id": "CV", "nome": "Cabo Verde"},
      {"id": "KH", "nome": "Cambodja"},
      {"id": "CM", "nome": "Camarões"},
      {"id": "CA", "nome": "Canadá"},
      {"id": "KY", "nome": "Cayman, Ilhas"},
      {"id": "KZ", "nome": "Cazaquistão"},
      {"id": "CF", "nome": "Centro-africana, República"},
      {"id": "TD", "nome": "Chade"},
      {"id": "CZ", "nome": "Checa, República"},
      {"id": "CL", "nome": "Chile"},
      {"id": "CN", "nome": "China"},
      {"id": "CY", "nome": "Chipre"},
      {"id": "CX", "nome": "Christmas, Ilha"},
      {"id": "CC", "nome": "Cocos, Ilhas"},
      {"id": "CO", "nome": "Colômbia"},
      {"id": "KM", "nome": "Comores"},
      {"id": "CG", "nome": "Congo, República do"},
      {"id": "CD", "nome": "Congo, República Democrática do (antigo Zaire)"},
      {"id": "CK", "nome": "Cook, Ilhas"},
      {"id": "KR", "nome": "Coreia do Sul"},
      {"id": "KP", "nome": "Coreia, República Democrática da (Coreia do Norte)"},
      {"id": "CI", "nome": "Costa do Marfim"},
      {"id": "CR", "nome": "Costa Rica"},
      {"id": "HR", "nome": "Croácia"},
      {"id": "CU", "nome": "Cuba"},
      {"id": "DK", "nome": "Dinamarca"},
      {"id": "DJ", "nome": "Djibouti"},
      {"id": "DM", "nome": "Dominica"},
      {"id": "DO", "nome": "Dominicana, República"},
      {"id": "EG", "nome": "Egipto"},
      {"id": "SV", "nome": "El Salvador"},
      {"id": "AE", "nome": "Emiratos Árabes Unidos"},
      {"id": "EC", "nome": "Equador"},
      {"id": "ER", "nome": "Eritreia"},
      {"id": "SK", "nome": "Eslováquia"},
      {"id": "SI", "nome": "Eslovénia"},
      {"id": "ES", "nome": "Espanha"},
      {"id": "US", "nome": "Estados Unidos da América"},
      {"id": "EE", "nome": "Estónia"},
      {"id": "ET", "nome": "Etiópia"},
      {"id": "FO", "nome": "Faroe, Ilhas"},
      {"id": "FJ", "nome": "Fiji"},
      {"id": "PH", "nome": "Filipinas"},
      {"id": "FI", "nome": "Finlândia"},
      {"id": "FR", "nome": "França"},
      {"id": "GA", "nome": "Gabão"},
      {"id": "GM", "nome": "Gâmbia"},
      {"id": "GH", "nome": "Gana"},
      {"id": "GE", "nome": "Geórgia"},
      {"id": "GS", "nome": "Geórgia do Sul e Sandwich do Sul, Ilhas"},
      {"id": "GI", "nome": "Gibraltar"},
      {"id": "GR", "nome": "Grécia"},
      {"id": "GD", "nome": "Grenada"},
      {"id": "GL", "nome": "Gronelândia"},
      {"id": "GP", "nome": "Guadeloupe"},
      {"id": "GU", "nome": "Guam"},
      {"id": "GT", "nome": "Guatemala"},
      {"id": "GG", "nome": "Guernsey"},
      {"id": "GY", "nome": "Guiana"},
      {"id": "GF", "nome": "Guiana Francesa"},
      {"id": "GW", "nome": "Guiné-Bissau"},
      {"id": "GN", "nome": "Guiné-Conacri"},
      {"id": "GQ", "nome": "Guiné Equatorial"},
      {"id": "HT", "nome": "Haiti"},
      {"id": "HM", "nome": "Heard e Ilhas McDonald, Ilha"},
      {"id": "HN", "nome": "Honduras"},
      {"id": "HK", "nome": "Hong Kong"},
      {"id": "HU", "nome": "Hungria"},
      {"id": "YE", "nome": "Iémen"},
      {"id": "IN", "nome": "Índia"},
      {"id": "ID", "nome": "Indonésia"},
      {"id": "IQ", "nome": "Iraque"},
      {"id": "IR", "nome": "Irão"},
      {"id": "IE", "nome": "Irlanda"},
      {"id": "IS", "nome": "Islândia"},
      {"id": "IL", "nome": "Israel"},
      {"id": "IT", "nome": "Itália"},
      {"id": "JM", "nome": "Jamaica"},
      {"id": "JP", "nome": "Japão"},
      {"id": "JE", "nome": "Jersey"},
      {"id": "JO", "nome": "Jordânia"},
      {"id": "KI", "nome": "Kiribati"},
      {"id": "KW", "nome": "Kuwait"},
      {"id": "LA", "nome": "Laos"},
      {"id": "LS", "nome": "Lesoto"},
      {"id": "LV", "nome": "Letónia"},
      {"id": "LB", "nome": "Líbano"},
      {"id": "LR", "nome": "Libéria"},
      {"id": "LY", "nome": "Líbia"},
      {"id": "LI", "nome": "Liechtenstein"},
      {"id": "LT", "nome": "Lituânia"},
      {"id": "LU", "nome": "Luxemburgo"},
      {"id": "MO", "nome": "Macau"},
      {"id": "MK", "nome": "Macedónia, República da"},
      {"id": "MG", "nome": "Madagáscar"},
      {"id": "MY", "nome": "Malásia"},
      {"id": "MW", "nome": "Malawi"},
      {"id": "MV", "nome": "Maldivas"},
      {"id": "ML", "nome": "Mali"},
      {"id": "MT", "nome": "Malta"},
      {"id": "FK", "nome": "Malvinas, Ilhas (Falkland)"},
      {"id": "IM", "nome": "Man, Ilha de"},
      {"id": "MP", "nome": "Marianas Setentrionais"},
      {"id": "MA", "nome": "Marrocos"},
      {"id": "MH", "nome": "Marshall, Ilhas"},
      {"id": "MQ", "nome": "Martinica"},
      {"id": "MU", "nome": "Maurícia"},
      {"id": "MR", "nome": "Mauritânia"},
      {"id": "YT", "nome": "Mayotte"},
      {"id": "UM", "nome": "Menores Distantes dos Estados Unidos, Ilhas"},
      {"id": "MX", "nome": "México"},
      {"id": "MM", "nome": "Myanmar (antiga Birmânia)"},
      {"id": "FM", "nome": "Micronésia, Estados Federados da"},
      {"id": "MZ", "nome": "Moçambique"},
      {"id": "MD", "nome": "Moldávia"},
      {"id": "MC", "nome": "Mónaco"},
      {"id": "MN", "nome": "Mongólia"},
      {"id": "ME", "nome": "Montenegro"},
      {"id": "MS", "nome": "Montserrat"},
      {"id": "NA", "nome": "Namíbia"},
      {"id": "NR", "nome": "Nauru"},
      {"id": "NP", "nome": "Nepal"},
      {"id": "NI", "nome": "Nicarágua"},
      {"id": "NE", "nome": "Níger"},
      {"id": "NG", "nome": "Nigéria"},
      {"id": "NU", "nome": "Niue"},
      {"id": "NF", "nome": "Norfolk, Ilha"},
      {"id": "NO", "nome": "Noruega"},
      {"id": "NC", "nome": "Nova Caledónia"},
      {"id": "NZ", "nome": "Nova Zelândia (Aotearoa)"},
      {"id": "OM", "nome": "Oman"},
      {"id": "NL", "nome": "Países Baixos (Holanda)"},
      {"id": "PW", "nome": "Palau"},
      {"id": "PS", "nome": "Palestina"},
      {"id": "PA", "nome": "Panamá"},
      {"id": "PG", "nome": "Papua-Nova Guiné"},
      {"id": "PK", "nome": "Paquistão"},
      {"id": "PY", "nome": "Paraguai"},
      {"id": "PE", "nome": "Peru"},
      {"id": "PN", "nome": "Pitcairn"},
      {"id": "PF", "nome": "Polinésia Francesa"},
      {"id": "PL", "nome": "Polónia"},
      {"id": "PR", "nome": "Porto Rico"},
      {"id": "PT", "nome": "Portugal"},
      {"id": "QA", "nome": "Qatar"},
      {"id": "KE", "nome": "Quénia"},
      {"id": "KG", "nome": "Quirguistão"},
      {"id": "GB", "nome": "Reino Unido da Grã-Bretanha e Irlanda do Norte"},
      {"id": "RE", "nome": "Reunião"},
      {"id": "RO", "nome": "Roménia"},
      {"id": "RW", "nome": "Ruanda"},
      {"id": "RU", "nome": "Rússia"},
      {"id": "EH", "nome": "Saara Ocidental"},
      {"id": "AS", "nome": "Samoa Americana"},
      {"id": "WS", "nome": "Samoa (Samoa Ocidental)"},
      {"id": "PM", "nome": "Saint Pierre et Miquelon"},
      {"id": "SB", "nome": "Salomão, Ilhas"},
      {"id": "KN", "nome": "São Cristóvão e Névis (Saint Kitts e Nevis)"},
      {"id": "SM", "nome": "San Marino"},
      {"id": "ST", "nome": "São Tomé e Príncipe"},
      {"id": "VC", "nome": "São Vicente e Granadinas"},
      {"id": "SH", "nome": "Santa Helena"},
      {"id": "LC", "nome": "Santa Lúcia"},
      {"id": "SN", "nome": "Senegal"},
      {"id": "SL", "nome": "Serra Leoa"},
      {"id": "RS", "nome": "Sérvia"},
      {"id": "SC", "nome": "Seychelles"},
      {"id": "SG", "nome": "Singapura"},
      {"id": "SY", "nome": "Síria"},
      {"id": "SO", "nome": "Somália"},
      {"id": "LK", "nome": "Sri Lanka"},
      {"id": "SZ", "nome": "Suazilândia"},
      {"id": "SD", "nome": "Sudão"},
      {"id": "SE", "nome": "Suécia"},
      {"id": "CH", "nome": "Suíça"},
      {"id": "SR", "nome": "Suriname"},
      {"id": "SJ", "nome": "Svalbard e Jan Mayen"},
      {"id": "TH", "nome": "Tailândia"},
      {"id": "TW", "nome": "Taiwan"},
      {"id": "TJ", "nome": "Tajiquistão"},
      {"id": "TZ", "nome": "Tanzânia"},
      {"id": "TF", "nome": "Terras Austrais e Antárticas Francesas (TAAF)"},
      {"id": "IO", "nome": "Território Britânico do Oceano Índico"},
      {"id": "TL", "nome": "Timor-Leste"},
      {"id": "TG", "nome": "Togo"},
      {"id": "TK", "nome": "Toquelau"},
      {"id": "TO", "nome": "Tonga"},
      {"id": "TT", "nome": "Trindade e Tobago"},
      {"id": "TN", "nome": "Tunísia"},
      {"id": "TC", "nome": "Turks e Caicos"},
      {"id": "TM", "nome": "Turquemenistão"},
      {"id": "TR", "nome": "Turquia"},
      {"id": "TV", "nome": "Tuvalu"},
      {"id": "UA", "nome": "Ucrânia"},
      {"id": "UG", "nome": "Uganda"},
      {"id": "UY", "nome": "Uruguai"},
      {"id": "UZ", "nome": "Usbequistão"},
      {"id": "VU", "nome": "Vanuatu"},
      {"id": "VA", "nome": "Vaticano"},
      {"id": "VE", "nome": "Venezuela"},
      {"id": "VN", "nome": "Vietname"},
      {"id": "VI", "nome": "Virgens Americanas, Ilhas"},
      {"id": "VG", "nome": "Virgens Britânicas, Ilhas"},
      {"id": "WF", "nome": "Wallis e Futuna"},
      {"id": "ZM", "nome": "Zâmbia"},
      {"id": "ZW", "nome": "Zimbabwe"}
    ];
  }
}

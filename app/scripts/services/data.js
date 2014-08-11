'use strict';

angular.module('votoApp')
    .factory('Data', function() {
        function getCandidates() {
            //return candidates.$promise;
            return myCandidates;
        }

        function getQuestions() {
            //return questions.$promise;
            return myQuestions;
        }
        /*var candidates = $resource('http://votomovil.co/data/candidates.json', {}, {
                get: {
                    method: 'GET',
                    isArray: !0
                }
            }).get();
        var questions = $resource('http://votomovil.co/data/questions.json', {}, {
                get: {
                    method: 'GET',
                    isArray: !0
                }
            }).get();*/
        var votes = [];

        var myCandidates = [
            {
                profileURL: 'http://votomovil.co/candidatos/1/',
                name: 'Juan Manuel Santos',
                img: 'http://votomovil.co/media/candidate/santos.jpg',
                proposals: 'http://www.juanmanuelsantospresidente.com/propuestas-0/educacion/ twitter: @JuanManSantos Temas propuestos: - Sociedad - Seguridad - Paz - Salud y Bienestar - Educación',
                catchword: 'Hemos hecho mucho, falta mucho por hacer',
                imgSmall: 'http://votomovil.co/media/cache/98/56/9856d622434a1143c396c051e67f0613.jpg',
                imgMedium: 'http://votomovil.co/media/cache/29/d2/29d2d9ffe47ed5fbd3e402835b6f8f9a.jpg',
                party: 'Partido de la U',
                explanations: [
                    'Estoy de acuerdo solamente con las causales que contempla la Corte Constitucional.',
                    'Siempre y cuando sea acordada con la comunidad internacional y esté basada en criterios científicos para reducir daño a la sociedad.',
                    '\'La acción de tutela debe recobrar su naturaleza jurídica y su fin dentro del Estado colombiano.\' www.cej.org.co/files/Rptas_JUAN_MANUEL_SANTOS.pdf',
                    'Sí, siempre y cuando no hayan cometido crímenes de lesa humanidad. Es mejor tenerlos debatiendo en la democracia y no disparando.',
                    'Sí, aumentando el periodo a 5 o 6 años. 4 años son muy poco para desarrollar un plan de gobierno a plenitud.',
                    '@JuanManSantos: \'4 por Mil será para el campo: acueductos, distritos de riego, vivienda, restitución de tierras, comercialización y compromisos sectoriales\' https://twitter.com/JuanManSantos/status/413098367108276225',
                    'Sí, siempre y cuando se garantice la protección del medioambiente y el respeto a las comunidades.',
                    'No, lo que debemos hacer es acelerar la expedición de una nueva normativa para el sector.',
                    'Sí con algunas demandas y no con otras. El problema agrario es estructural. Estamos avanzando en su solución.',
                    'Más información: http://www.mineducacion.gov.co/proyectos/1737/propertyvalue-41331.html',
                    'No es necesario ampliarlas. ',
                    'Es una figura creada por ley y debe aplicarse cuando sea apropiada, sin detrimento de la autoridad del Estado.',
                    'Sus funciones pueden asumirse por un gerente judicial y una sala disciplinaria.',
                    'No, pero cuando tengamos paz el gasto de la guerra lo reorientaremos hacia más inversión social.',
                    'No por ahora. Cuando alcancemos la paz podríamos explorar alternativas.',
                    '\'La búsqueda de la paz se hará “sin bajar la guardia, sin dejar de proteger a nuestros ciudadanos hasta el día en que se firme un cese al fuego\' http://wsp.presidencia.gov.co/Prensa/2014/Mayo/Paginas/20140503_02-Habra-mano-de-hierro-y-guante-de-seda-para-que-avance-la-democracia-advirtio-el-Jefe-de-Estado.aspx',
                    'Haremos alianzas sobre acuerdos programáticos con otros partidos, buscando siempre fortalecer nuestra propuesta de gobierno.',
                    'Sí, es legítimo que se promueva la inversión social en los departamentos. ',
                    'Estoy de acuerdo con los efectos jurídicos y económicos de la unión homosexual, llámese o no matrimonio.',
                    'No a una Constituyente; sí a una refrendación popular de los acuerdos de paz.',
                    'El problema agrario es estructural. Cumplimos mayoría de peticiones. Avanzamos para solucionar problemas faltantes.',
                    'Eso ya lo contempla la ley. Nosotros perseguiremos los delitos de mayor impacto y castigaremos la reincidencia.',
                    '\'El Gobierno se reserva la posibilidad de recurrir a la aspersión si por algún motivo las circunstancias no permiten hacerlo manualmente. http://wsp.presidencia.gov.co/Prensa/2014/Mayo/Paginas/20140515_06-Palabras-Alocucion-del-Presidente-Santos-sobre-avances-en-conversaciones-para-poner-fin-conflicto-armado.aspx',
                    '\'Lo que tenemos que hacer es que el sistema funcione, que sea sostenible financieramente y sobre todo se traduzca en mayor y en mejor servicio para los pacientes\' http://wsp.presidencia.gov.co/Prensa/2013/Octubre/Paginas/20131029_01-Reforma-a-la-salud-busca-garantizar-calidad-del-servicio-a-los-usuarios-advierte-el-Presidente-Santos.aspx',
                    '\'Nuestro objetivo es restablecer la seguridad jurídica en transacciones sobre predios rurales, aumentar la confianza inversionista y establecer normas claras sobre adjudicación y utilización [de baldíos] con el fin de permitir el desarrollo de diferentes modelos de producción agropecuaria.\' wsp.presidencia.gov.co/Prensa/2013/Noviembre/Paginas/20131106_17-Palabras-del-Presidente-Santos-en-el-XXXVII-Congreso-Agrario-Nacional.aspx'
                ],
                id: '1',
                matchURL: 'http://votomovil.co/match/1/',
                responses: [
                    false,
                    true,
                    true,
                    true,
                    true,
                    false,
                    true,
                    false,
                    true,
                    true,
                    false,
                    true,
                    true,
                    false,
                    false,
                    false,
                    true,
                    true,
                    true,
                    false,
                    true,
                    true,
                    true,
                    true,
                    true
                ]
            },
            {
                profileURL: 'http://votomovil.co/candidatos/5/',
                name: 'Oscar Ivan Zuluaga',
                img: 'http://votomovil.co/media/candidate/oscar.jpg',
                proposals: 'http://www.oscarivanzuluaga.com/#propuestas twitter: @OIZuluaga - Seguridad: Defendiendo las libertades - Justicia: Para convivir en paz - Desarrollo Regional: Colombia, país de regiones - Agro: El campo del futuro - Infraestructura: Construyendo caminos de oportunidades - Fomento a la industria: Hacia un país de pequeños y medianos empresarios - Educación: El camino de las oportunidades - Salud: El centro es el paciente',
                catchword: 'Por una Colombia distinta',
                imgSmall: 'http://votomovil.co/media/cache/76/32/763286b6a467f7cb746351f4cecc6953.jpg',
                imgMedium: 'http://votomovil.co/media/cache/25/d2/25d2739c5123651d6d1569f175b73c0a.jpg',
                party: 'Centro Democrático',
                explanations: [
                    '',
                    '',
                    '\'Más que una reforma es una debida regulación. Poder fijar con precisión para cuáles casos y cuál es su alcance, mediante una Ley Estatutaria de Derechos Fundamentales.\' http://www.cej.org.co/files/Rptas_SCAR_IVN_ZULUAGA.pdf',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'http://www.wradio.com.co/escucha/archivo_de_audio/cambiaria-el-examen-que-evalua-la-calidad-de-los-profesores-candidatos-responden/20140430/oir/2202229.aspx',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '\'El Congreso de la República, al determinar el alcance concreto de los derechos sociales y económicos consagrados en esta Constitución, deberá hacerlo en tal forma que asegure la sostenibilidad fiscal con el fin de darles, en conjunto, continuidad y progresividad.\' http://www.congresovisible.org/proyectos-de-ley/por-el-cual-se-establece-el-criterio-de-sostenibilidad-fiscal-ley-de-sostenibilidad-fiscal/5700/',
                    ''
                ],
                id: '5',
                matchURL: 'http://votomovil.co/match/5/',
                responses: [
                    false,
                    false,
                    true,
                    true,
                    false,
                    false,
                    true,
                    false,
                    true,
                    true,
                    true,
                    false,
                    true,
                    false,
                    true,
                    false,
                    true,
                    false,
                    false,
                    false,
                    true,
                    true,
                    null,
                    true,
                    null
                ]
            }
        ];
        var myQuestions = [
            {
                question: '¿Está de acuerdo con ampliar las tres causales permitidas del aborto para despenalizarlo totalmente?',
                id: 1,
                description: 'En el 2006 la Corte Constitucional consideró que penalizar totalmente el aborto implicaba, por una parte, \'el sacrificio absoluto de todos los derechos fundamentales de la mujer embarazada\', y, por otra, la total primacía de la vida del no nacido. En consecuencia, la Corte decidió que la interrupción voluntaria del embarazo no sería considerada un delito en los tres casos siguientes: 1) Cuando corre peligro la vida o la salud de la mujer embarazada. 2) Cuando el embarazo es resultado de una violación o de incesto. 3) Cuando hay malformaciones del feto que son incompatibles con la vida por fuera del útero.'
            },
            {
                question: '¿Está de acuerdo con la despenalización del consumo de sustancias psicoactivas?',
                id: 3,
                description: 'Las sustancias psicoactivas pueden ser de origen natural o sintético. Tienen la capacidad de alterar funciones del sistema nervioso central. Algunos ejemplos de este tipo de sustancias son el alcohol, las anfetaminas, alucinógenos como la marihuana, entre otros. En los últimos años en Colombia se ha abierto el debate sobre cuál debe ser el enfoque de una política de Estado en materia de drogas. El Congreso durante este cuatrienio aprobó una Ley (1566 de 2012) encaminada a tratar esta problemática como un asunto de salud pública. Por su parte, el equipo negociador que se encuentra en la Habana, actualmente está discutiendo el tema del narcotráfico con los representantes de la guerrilla de las FARC. Uno de los puntos de la agenda es el de la sustitución de cultivos ilícitos. Sin embargo, hasta el momento, no ha habido pronunciamientos concretos al respecto. '
            },
            {
                question: '¿Considera que se debe promover una reforma a la acción de tutela?',
                id: 20,
                description: 'La acción de tutela es un mecanismo creado por la Constitución de 1991 para hacer efectiva la protección de los derechos fundamentales. Es aplicable cuando no existe otro medio de defensa judicial y/o cuando se requiere una respuesta rápida a la protección solicitada. En Colombia, la tutela ha tenido incidencia especial en la protección de derechos como el de la salud. Lo anterior se refleja en el número creciente de acciones de tutela instauradas por los usuarios para acceder a los servicios del sistema. Por lo anterior, ha surgido un debate con relación a la pertinencia o no de racionalizar el uso de este mecanismo que fue concebido como extraordinario pero que se ha convertido en la regla. '
            },
            {
                question: '¿Aceptaría usted que personas que hayan cometido crímenes políticos, se desmovilicen y se postulen a elecciones?',
                id: 4,
                description: 'Por cuenta del Marco Jurídico para la Paz, aprobado por el Congreso en el 2012, se abre la posibilidad para la participación política de miembros de grupos armados ilegales que firmen un acuerdo de paz. El nuevo Congreso que se posesionará el próximo 20 de julio, tendrá que definir las condiciones y mecanismos para la participación política de quienes se desmovilicen, y quiénes podrán o no acceder a ella de acuerdo a la gravedad de los crímenes cometidos.'
            },
            {
                question: '¿Apoyaría una reforma constitucional que elimine la reelección presidencial y aumente el período presidencial a 6 años?',
                id: 6,
                description: 'El 26 de febrero de 2010 la Corte Constitucional tumbó el proyecto de ley de referendo para poner a consideración de los colombianos la posibilidad de una segunda reelección. La Corte sustentó su decisión en los vicios de trámite que se presentaron en el curso de la iniciativa ciudadana y durante el procedimiento legislativo. Uno de ellos relacionado con presuntas irregularidades en la financiación de la campaña en favor del proyecto de reforma constitucional. Un segundo vicio fue la modificación del texto original del proyecto. La iniciativa popular que apoyó en su momento el 14.59% del censo electoral para que llegara al Congreso, se refería a una reelección mediata o intercalada con otro periodo de gobierno. Sin embargo durante el trámite en la Comisión I del Senado se cambió el texto para proponer que esa reelección se pudiera dar de manera inmediata. '
            },
            {
                question: '¿Es partidario de eliminar el impuesto a los movimientos financieros, conocido como 4 por mil?',
                id: 21,
                description: 'El 4 por mil es un impuesto a las transacciones que realiza un usuario del sistema financiero. Consiste en que por cada mil pesos que un cliente retira o transfiere de una entidad financiera, cuatro pesos se destinan al pago de este tributo. El destinatario final de los recursos obtenidos es el Gobierno nacional. Aunque este impuesto se creó en el gobierno de Andrés Pastrana con un carácter transitorio, ha permanecido desde entonces en el esquema tributario. Sin embargo, actualmente es objeto de debate entre quienes lo consideran inadecuado y quienes creen que los recursos que se obtienen por cuenta de este impuesto, se pueden destinar a cosas puntuales como por ejemplo atender las demandas del paro nacional agrario.'
            },
            {
                question: '¿Apoyaría una ley para hacer productivos los recursos naturales de las reservas forestales, y de resguardos indígenas?',
                id: 7,
                description: 'La Ley 2a de 1959 reconoció la existencia de 7 zonas de reserva forestal para \'el desarrollo de la economía forestal y la protección de los suelos, las aguas y la vida silvestre\'. De igual manera dicha Ley estableció que el Gobierno tendría la facultad para reglamentar la forma en que algunos predios se podrían sustraer de dichas zonas de reserva, para que en los mismos se llevaran a cabo actividades de explotación diferentes a la forestal. Entretanto, la explotación de recursos naturales en territorios indígenas requiere de otros esfuerzos en cabeza del Ejecutivo. Éste debe hacer efectivo el derecho que tienen estas comunidades a participar en las decisiones que pueden tener repercusiones en su integridad cultural, social y económica. Así lo ha reiterado la Corte Constitucional en diversas sentencias, como la T-129 de 2011, en la que el Alto Tribunal fijó y fortaleció las reglas para la consulta previa y la \'búsqueda del consentimiento previo, libre e informado\' de comunidades indígenas y grupos étnicos.'
            },
            {
                question: '¿Considera necesario establecer una moratoria minera hasta tanto no se expida un nuevo código minero?',
                id: 9,
                description: 'El cambio climático se ha convertido en uno de los puntos más importantes de la agenda internacional. Según el Programa de las Naciones Unidas para el Medio Ambiente- PNUMA: “el cambio climático desafía nuestra capacidad para seguir adelante con nuestra forma de vida actual y pone en peligro los avances realizados en desarrollo humano a escala global”. Actualmente en Colombia, la minería no está promoviendo un desarrollo sustentable que sea compatible con la adaptación al cambio climático. Es por esto, en parte, que investigadores sociales, periodistas, ambientalistas, geólogos, e incluso políticos, han pedido en los últimos años al Gobierno nacional que declare una moratoria minera. Así, se suspendería totalmente la expedición de títulos mineros y licencias ambientales para la exploración y/o explotación minera, hasta tanto no se asegure que esta actividad económica en el país se adelante con el mínimo impacto ambiental y social.'
            },
            {
                question: '¿Considera que se deben reformar las facultades del Procurador?',
                id: 8,
                description: 'Una de las funciones del Procurador General de la Nación es la vigilancia de la conducta oficial de quienes desempeñan funciones públicas. Últimamente esta facultad ha sido objeto de debate a propósito de la sanción proferida por el procurador Alejandro Ordóñez de destituir e inhabilitar por 15 años al Alcalde Mayor de Bogotá, Gustavo Petro, por los hechos relacionados con el cambio de esquema de recolección de las basuras. ¿Un funcionario puede destituir e inhabilitar a un alcalde elegido por voto popular? Esta pregunta ha abierto la discusión sobre los presuntos excesivos poderes con los que cuenta el director del Ministerio Público y la pertinencia o no de modificar o incluso suprimir esta institución.'
            },
            {
                question: '¿Está usted de acuerdo con que el desempeño y las competencias de los docentes sean evaluadas?',
                id: 22,
                description: 'La evaluación de competencias es el mecanismo que determina el ascenso de los profesores. Quienes superen el 80% del examen que cuenta con 120 preguntas pueden ascender en el escalafón docente. Sin embargo, este criterio de ascenso es criticado por sectores de maestros como la Federación Colombiana de Trabajadores de la Educación (Fecode), quienes exigen que se tengan en cuenta otros factores como los títulos, la experiencia y la producción pedagógica, entre otros.'
            },
            {
                question: '¿Apoyaría el mantenimiento o ampliación de las exenciones tributarias a la inversión extranjera?',
                id: 12,
                description: 'Las exenciones tributarias implican una disminución en materia de impuestos en función de objetivos económicos. En Colombia, la legislación contempla tratamientos tributarios especiales como las exenciones, para atraer inversión extranjera directa al país (IED) y darle un impulso a la economía nacional, a través de la atracción de capital internacional bajando los costos de inversión.'
            },
            {
                question: '¿Apoya usted la figura de Zona de Reserva Campesina?',
                id: 11,
                description: 'A 2013 había en Colombia seis departamentos con Zonas de Reserva Campesina (ZRC). Las ZRC fueron introducidas primero mediante la Ley 160 de 1996 con la pretensión de otorgar tierras baldías en zonas de colonización a los campesinos de escasos recursos, de tal forma que pudieran trabajar dichos predios y obtener derechos de propiedad sobre los mismos. Actualmente, estas zonas son consideradas herramientas para la paz, ya que permiten a los campesinos afectados por el conflicto retornar al campo. Por lo anterior son pieza fundamental del primer acuerdo logrado entre los delegados del gobierno Santos y las Farc en La Habana. '
            },
            {
                question: '¿Está de acuerdo con la eliminación del Consejo Superior de la Judicatura?',
                id: 13,
                description: 'Esta entidad tiene como principales funciones administrar los recursos de la rama judicial, y por otro lado, investigar la conducta de los funcionarios judiciales y de los abogados. En reiteradas ocasiones desde diversos sectores se ha propuesto la eliminación de esta entidad por considerarse que ha sido ineficiente en el cumplimiento de sus tareas. Además,en los últimos años, el Consejo Superior de la Judicatura se ha visto envuelto en una serie de problemas e irregularidades como el sonado \'carrusel de pensiones\' que lo han puesto en el ojo del huracán. '
            },
            {
                question: '¿Estaría usted de acuerdo con la reducción del presupuesto militar en un posible escenario de posconflicto?',
                id: 15,
                description: 'Según cifras del Banco Mundial, entre 2004 y 2012 el gasto militar en Colombia ha representado en promedio el 3.40% del Producto Interno Bruto (PIB). Así, el país ocupa el cuarto lugar en el continente americano después de Guatemala (3.80%), Estados Unidos (3.47) y Cuba (3.41). En el 2013 el gasto fue de $24 billones mientras que en el 2012 fue de $21 billones, de acuerdo con el Ministerio de Defensa. '
            },
            {
                question: '¿Está de acuerdo con la eliminación del servicio militar obligatorio?',
                id: 14,
                description: 'La Constitución de 1991 establece que el servicio militar es obligatorio. Hoy existen tres excepciones: para personas con discapacidad física o sensorial permanente; para indígenas que residan en su territorio; para quienes argumenten objeción de conciencia. Sin embargo, esta última excepción está en mora de ser reglamentada por el Congreso de la República para que pueda ser alegada de manera efectiva.'
            },
            {
                question: '¿Apoyaría el establecimiento del cese al fuego bilateral para continuar el proceso de negociación con las FARC?',
                id: 23,
                description: 'Las FARC a lo largo del actual proceso de negociación, en reiteradas ocasiones han propuesto una suspensión de las acciones ofensivas de lado y lado, con el fin de crear un ambiente más favorable para el desarrollo de las conversaciones. En representación del Estado, el Ministro de Defensa ha dicho que un cese al fuego es inviable porque implicaría el fortalecimiento de los grupos armados ilegales.'
            },
            {
                question: '¿En caso de que haya segunda vuelta, estaría de acuerdo con que los candidatos finalistas realicen alianzas con otros partidos?',
                id: 19,
                description: ''
            },
            {
                question: '¿Está usted de acuerdo con la existencia de la figura de los cupos indicativos?',
                id: 17,
                description: 'Tras la eliminación de los auxilios parlamentarios y de los fondos de cofinanciación, recientemente se ha generado polémica por lo que se considera es la continuidad irregular de esas figuras de asignación de presupuesto a través de los llamados cupos indicativos. Algunos de sus críticos consideran que se trata de recursos públicos que el Gobierno desvía a los bolsillos de los congresistas. Sus defensores, entre estos la Procuraduría, han planteado que los cupos indicativos no suponen nada ilegal y les permiten a los congresistas beneficiar a sus regiones. En el año 2001, al tratar una demanda al respecto, la Corte Constitucional consideró que estas partidas \'incorporadas al presupuesto nacional en virtud de peticiones realizadas por los propios congresistas\', son \'apropiaciones para la inversión y el desarrollo regional\', y, por eso, \'no encontró ningún vicio de inconstitucionalidad\' en su existencia.'
            },
            {
                question: '¿Está de acuerdo con el matrimonio homosexual?',
                id: 2,
                description: 'En el año 2011 la Corte Constitucional mediante la sentencia C-577/11 exhortó al Congreso de la República a reglamentar, en un plazo no superior a junio de 2013, la manera en que se debían reconocer y formalizar las uniones de parejas del mismo sexo. Desde entonces por el Congreso han pasado diversas iniciativas en este sentido, que no han tenido éxito. Por lo tanto, según lo estableció la Corte, dado que el Congreso no expidió la legislación correspondiente, desde el 20 de junio de 2013 las parejas del mismo sexo tienen derecho a acudir ante notario o juez competente a formalizar y solemnizar su vínculo contractual.'
            },
            {
                question: '¿Considera usted que debería realizarse una Asamblea Nacional Constituyente para la paz?',
                id: 5,
                description: 'Una Asamblea Constituyente es un mecanismo de participación ciudadana a través del cual un cuerpo colegiado, compuesto por ciudadanos elegidos por la misma ciudadanía, da forma a la organización política de la nación y puede reformar la Constitución. El Congreso de la República debe aprobar una ley mediante la cual se disponga que la ciudadanía, a través de una votación, decida si convoca a una Asamblea Constituyente para reformar la Constitución de manera parcial o total. En el marco del actual proceso de paz que se adelanta en La Habana, algunos sectores se han mostrado a favor de convocar una Constituyente para refrendar las medidas que se adopten con ocasión de la firma de un acuerdo definitivo.'
            },
            {
                question: '¿Está usted de acuerdo con las demandas de las movilizaciones que se han dado en torno al Paro Nacional Agrario?',
                id: 10,
                description: 'En el año 2013 el desarrollo rural volvió a ocupar un lugar preponderante en la agenda nacional. El pasado 19 de agosto inició el Paro Nacional Agrario, a través del cual diversos sectores sociales han venido señalando desde entonces la crisis que vive el campo colombiano. El Gobierno y los sectores campesinos han logrado acuerdos parciales, como en lo relacionado con los subsidios para compensar las importaciones de los productos que ellos también cultivan. Sin embargo, persisten demandas insatisfechas que adquieren especial relevancia en el contexto de la contienda electoral, los diálogos de La Habana y la instalación del nuevo Congreso 2014-2018.'
            },
            {
                question: 'Para solucionar el problema de hacinamiento carcelario, ¿estaría usted de acuerdo en conceder penas alternativas tales como la libertad condicional a las personas que hayan cometido delitos excarcelables?',
                id: 16,
                description: 'Como se ha puesto de presente en los últimos años, el hacinamiento carcelario es un problema estructural que obedece a la ausencia de una política de Estado capaz de garantizar derechos fundamentales a la vida digna, a la salud y a la integridad física y psicológica, entre otros, a la población privada de la libertad en el país. Desde el Ejecutivo se promovió en el año 2013 una reforma al Código Penitenciario y Carcelario que se convirtió en la Ley 1709 de 2014. Uno de los ejes centrales, es la flexibilización de las medidas privativas de la libertad con el fin de hacer más eficiente la concesión de la prisión domiciliaria, el brazalete electrónico, la libertad condicional, entre otros.'
            },
            {
                question: '¿Considera usted que se debe mantener la política de fumigación de cultivos ilícitos con glifosato?',
                id: 24,
                description: 'El glifosato es una sustancia que ha sido utilizado por distintos gobiernos en Colombia para erradicar cultivos ilícitos de drogas como la coca y la amapola. Algunos estudios han mostrado los efectos negativos para la salud humana y el ambiente del uso de dicho herbicida. Otras investigaciones han encontrado que este tipo de erradicación, antes que disuadir el negocio del narcotráfico, lo ha incentivado, logrando únicamente el desplazamiento de los cultivos. Sin embargo, las aspersiones aéreas con glifosato continúan haciendo parte de la política de drogas del país, y por lo tanto, el debate sobre su pertinencia permanece abierto.'
            },
            {
                question: '¿Usted está de acuerdo con que la inversión social en salud esté sujeta a los recursos con los que cuente el Estado?',
                id: 25,
                description: 'En los últimos años se ha abierto un debate en el país entre quienes consideran que la sostenibilidad financiera debe ser un criterio que rija al sistema de salud, y aquellos que alegan que el Estado debe asegurar de manera oportuna los servicios de salud, independientemente de cualquier consideración sobre la disponibilidad de recursos que existan para ello. Actualmente el tema es objeto de discusión en el marco del control de constitucionalidad que el Alto Tribunal está haciendo a la Ley Estatuaria de Salud, aprobada el año pasado. '
            },
            {
                question: '¿Está de acuerdo con la adjudicación de terrenos baldíos para proyectos agroindustriales?',
                id: 26,
                description: 'Los baldíos son terrenos urbanos o rurales que le pertenecen a la Nación, cuya adjudicación, tal como lo establece la Corte Constitucional, tiene como objetivo principal \'permitir el acceso a la propiedad a quienes carecen de ella y contribuir a mejorar las condiciones económicas y sociales de los adjudicatarios\'. No obstante, en los últimos años se ha abierto el debate sobre la posibilidad de que en estos terrenos puedan coexistir modelos de producción agroindustriales con esquemas de economía campesina.'
            }
        ];

        _.forEach(myQuestions, function(question) {
            votes.push({
                relevancy: null,
                choice: null,
                id: question.id
            });
        });


        return {
            getCandidates: getCandidates,
            getQuestions: getQuestions,
            byId: function(id) {
                return _.find(myCandidates, function(item) {
                    return item.id === id;
                });
            },
            votes: votes,
            match: null
        };
    });
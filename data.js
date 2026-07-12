window.AGP_DATA = {
  clients: [
    {id:'CLI-001',name:'Grupo Andino SAC',contact:'María Torres',email:'maria@grupoandino.pe',phone:'987 654 321',status:'Activo',value:18400},
    {id:'CLI-002',name:'Nova Retail Perú',contact:'Carlos Medina',email:'cmedina@novaretail.pe',phone:'946 210 875',status:'Activo',value:12600},
    {id:'CLI-003',name:'Logística Horizonte',contact:'Paola Vega',email:'pvega@horizonte.pe',phone:'982 118 403',status:'Prospecto',value:7200},
    {id:'CLI-004',name:'Innova Proyectos',contact:'Luis Romero',email:'lromero@innovaproyectos.pe',phone:'990 742 166',status:'Activo',value:9600},
    {id:'CLI-005',name:'Nexo Comercial',contact:'Andrea Ruiz',email:'aruiz@nexo.pe',phone:'944 280 111',status:'Inactivo',value:3100}
  ],
  quotes: [
    {id:'COT-2026-041',client:'Grupo Andino SAC',date:'10 Jul 2026',amount:8450,status:'Aprobada'},
    {id:'COT-2026-040',client:'Nova Retail Perú',date:'09 Jul 2026',amount:6250,status:'Enviada'},
    {id:'COT-2026-039',client:'Innova Proyectos',date:'08 Jul 2026',amount:11200,status:'Borrador'},
    {id:'COT-2026-038',client:'Logística Horizonte',date:'06 Jul 2026',amount:4800,status:'Vencida'},
    {id:'COT-2026-037',client:'Nexo Comercial',date:'04 Jul 2026',amount:3900,status:'Aprobada'}
  ],
  projects: [
    {name:'Implementación ERP',client:'Grupo Andino SAC',progress:72,status:'En progreso',due:'25 Jul'},
    {name:'Portal comercial',client:'Nova Retail Perú',progress:38,status:'En progreso',due:'02 Ago'},
    {name:'Automatización operativa',client:'Innova Proyectos',progress:12,status:'Planificación',due:'18 Ago'},
    {name:'Migración de datos',client:'Nexo Comercial',progress:100,status:'Finalizado',due:'30 Jun'},
    {name:'Dashboard gerencial',client:'Logística Horizonte',progress:100,status:'Finalizado',due:'05 Jul'}
  ],
  activity: [
    {icon:'✓',text:'Cotización COT-2026-041 aprobada',meta:'Grupo Andino SAC',time:'Hace 12 min'},
    {icon:'＋',text:'Nuevo cliente registrado',meta:'Logística Horizonte',time:'Hace 38 min'},
    {icon:'↻',text:'Proyecto actualizado al 72%',meta:'Implementación ERP',time:'Hace 1 h'},
    {icon:'S/',text:'Pago registrado por S/ 4,250',meta:'Nova Retail Perú',time:'Hace 3 h'},
    {icon:'✉',text:'Cotización enviada por correo',meta:'COT-2026-040',time:'Ayer'}
  ]
};

export const modules = [
    {
        idMenu:1,
        Name:'JSON PH Serv',
        Route:'jsonplaceholder',
        submodules:[
            {idSubmodule:1,name:'Posts',separator:true,route:'posts'},
            {idSubmodule:2,name:'Comments',route:'comments'},
            {idSubmodule:3,name:'Albums',route:'albums'},
            {idSubmodule:4,name:'photos',route:'photos'},
            {idSubmodule:5,name:'todos',route:'todos'},
            {idSubmodule:6,name:'users',route:'users'}
        ]
    },
    {
        idMenu:2,
        Name:'Administracion',
        Route:'admin',
        submodules:[
            {idSubmodule:1,name:'Usuarios',separator:true,route:'dash'},
            {idSubmodule:2,name:'Modulos',route:'dash'},
            {idSubmodule:3,name:'Submodulos',route:'dash'},
            {idSubmodule:4,name:'Roles',route:'dash'}
        ]
    }
];
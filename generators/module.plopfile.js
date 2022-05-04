module.exports = function (plop) {
    plop.setGenerator('module', {
      description: 'generates a new module',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Please, enter the module name',
        },
      ],
      actions: [
        {
          type: 'add',
          path: '../src/controllers/{{lowerCase name}}.controller.ts',
          templateFile: 'templates/controller.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/types/{{lowerCase name}}.types.ts',
          templateFile: 'templates/types.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/routes/{{lowerCase name}}.routes.ts',
          templateFile: 'templates/routes.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/services/{{lowerCase name}}/create.{{lowerCase name}}.service.ts',
          templateFile: 'templates/create.service.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/services/{{lowerCase name}}/update.{{lowerCase name}}.service.ts',
          templateFile: 'templates/update.service.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/validations/{{lowerCase name}}/update.{{lowerCase name}}.validation.ts',
          templateFile: 'templates/update.validation.template.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/validations/{{lowerCase name}}/create.{{lowerCase name}}.validation.ts',
          templateFile: 'templates/create.validation.template.ts.hbs',
        },
        {
          type: 'append',
          path: '../src/types/index.ts',
          template: 'export * from \'./{{lowerCase name}}.types\';'
        },
        {
          type: 'append',
          path: '../src/validations/index.ts',
          template: 'export * from \'./{{lowerCase name}}/create.{{lowerCase name}}.validation\';'
        },
        {
          type: 'append',
          path: '../src/validations/index.ts',
          template: 'export * from \'./{{lowerCase name}}/update.{{lowerCase name}}.validation\';'
        },
        {
          type: 'append',
          path: '../src/routes/index.ts',
          pattern: new RegExp('// router_import'),
          template: 'import {{lowerCase name}}Routes from \'./{{lowerCase name}}.routes\';',
        },
        {
          type: 'append',
          path: '../src/routes/index.ts',
          pattern: new RegExp('// router_usage'),
          template: 'router.use(\'/v1/{{lowerCase name}}\', {{lowerCase name}}Routes);',
        },
      ],
    });
  };
  
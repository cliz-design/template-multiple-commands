import { defineSubCommand } from '@cliz/cli';

import { create } from '../core/create';

export default defineSubCommand((createCommand) => {
  return createCommand('创建')
    .argument('<projectName>', '项目名称')
    .action(async (action) => {
      const projectName = action.args.projectName as string;
      const options = action.options as any;

      await create(projectName, options);
    });
});

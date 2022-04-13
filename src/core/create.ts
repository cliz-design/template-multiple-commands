export interface CreateOptions {
  codePath?: string;
}

export async function create(projectName: string, options?: CreateOptions) {
  console.info(
    `@TODO create ${projectName} with options: ${JSON.stringify(options)}`,
  );
}

import { ArgumentParser } from './helpers/ArgumentParser';
import { TestFileLoader } from './helpers/TestFileLoader';

interface IOptions {
  run?: string[];
}

const getOptions = () =>
  ArgumentParser.parse<IOptions>(async (command, prompt, action) => {
    command.option('--run <string...>', 'select test code');

    prompt;

    return action(async (options) => {
      return options as IOptions;
    });
  });

async function main(): Promise<void> {
  const options: IOptions = await getOptions();
  const testSet = TestFileLoader.load(__dirname, options);

  for await (const test of testSet) {
    await import(test);
  }
}

main().catch(console.error);
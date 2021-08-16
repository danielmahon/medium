/* eslint-disable @typescript-eslint/no-var-requires */

import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import * as glob from "glob";
import * as _ from "lodash";
import * as path from "path";
import * as React from "react";

const storybookRootDir = path.resolve(__dirname, "../../.storybook");
const storybookConfiguration = require(path.join(storybookRootDir, "main"));
const snapshotDirectory = "__snapshots__";
const snapshotExtension = ".snap.js";

// Get all the files described by the patterns defined
// in the Storybook's configuration file
const files: string[] = storybookConfiguration.stories.flatMap((pattern: string) => {
  return glob.sync(pattern, {
    cwd: storybookRootDir,
    absolute: true,
  });
});

describe.each(files)("Shallow test %s", (pathname: string) => {
  const { default: params, ...stories } = require(pathname);
  const { title } = params;
  const states = Object.keys(stories);
  const snapshotPath = path.join(snapshotDirectory, _.kebabCase(title).concat(snapshotExtension));

  test.each(states)(`%s`, (state: string) => {
    const Story = stories[state] as React.FC;
    const tree = toJSON(mount(<Story />));

    expect(tree).toMatchSpecificSnapshot(snapshotPath);
  });
});

# jsqubits.d.ts

## What is this?

TypeScript declaration file for [jsqubits](https://github.com/davidbkemp/jsqubits).

### Usage

Include `jsqubits.d.ts` for your project.

1. Copy `jsqubits.d.ts` from cloned directory to your project,
2. Add `./path/to/yourProject/jsqubits.d.ts` to `files` property in `tsconfig.json`.

or, you can use `npm link` instead of file copy

```
git clone git@github.com:qramana/jsqubits.d.ts.git
cd path/to/jsqubits.d.ts
npm link
cd path/to/yourProject
npm link jsqubits.d.ts
// you can use declaration from your .ts 
```

## License

MIT

## Support

This software is supported by IPA Mitou Target Project 2018 (Category: quantum logic gate).
See the abstract [here](https://www.ipa.go.jp/jinzai/target/2018/koubo2_index.html) (written in Japanese).

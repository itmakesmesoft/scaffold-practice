const { pascalCase } = require("pascal-case");

module.exports = {
  prompt: ({ prompter }) =>
    prompter
      .prompt({
        type: "input",
        name: "name",
        message: "컴포넌트 이름을 입력하세요.",
      })
      .then(({ name }) => {
        if (!name) {
          throw new Error("컴포넌트 이름을 입력하세요!");
        }
        if (new RegExp(/[^a-z\-]/).test(name)) {
          throw new Error(
            "컴포넌트 이름은 PascalCase 또는 kebab-case 이어야 합니다."
          );
        }
        const pascal = pascalCase(name);
        console.log(`${pascal} 컴포넌트가 src 폴더 하위에 생성돼요.`);
        return { name: pascal };
      }),
};

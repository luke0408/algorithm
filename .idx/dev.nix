{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  packages = [
    # Java and Kotlin support.
    pkgs.jdk21
    pkgs.kotlin
    pkgs.gradle # for kotlin/java builds
    pkgs.kotlin-language-server
    pkgs.java-language-server

    # NodeJS and TypeScript support
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.eslint
    pkgs.nodePackages.prettier
    pkgs.nodejs
  ];

  env = { };

  idx = {
    extensions = [
      # Java and Kotlin Extentions.
      "redhat.java"
      "vscjava.vscode-gradle"
      "vscjava.vscode-java-debug"
      "vscjava.vscode-java-dependency"
      "vscjava.vscode-java-pack"
      "vscjava.vscode-java-test"
      "vscjava.vscode-maven"
    ];

    previews = {
      enable = true;
      previews = { };
    };

    workspace = {
      onCreate = {
        # install JS dependencies from NPM
        # npm-install = "npm install";
      };

      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
      };
    };
  };
}

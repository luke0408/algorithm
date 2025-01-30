{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  packages = [
    # pkgs.go
    # pkgs.python311
    # pkgs.python311Packages.pip
    # pkgs.nodejs_20
    # pkgs.nodePackages.nodemon
  ];

  env = {};
  idx = {
    extensions = [
      # "vscodevim.vim"
    ];

    previews = {
      enable = true;
      previews = {

      };
    };

    workspace = {
      onCreate = {
        # Example: install JS dependencies from NPM
        # npm-install = "npm install";
      };

      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
      };
    };
  };
}

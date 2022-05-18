# ch6-binar-mart

Mini Market Dashboard app with Express, Sequelize, EJS

## Setup

1. Install all packages :

```bash
npm install
```

2. Make sure you've installed `sequelize-cli` on global, if not, install it :

```bash
npm install -g sequelize-cli
```

3. Config database based on your local configuration on `config/config.json`

4. If you haven't created a database, create it first :

```bash
sequelize db:create
```

5. Migrate database :

```bash
sequelize db:migrate
```

6. Run app for development :

```bash
npm run dev
```

7. You can open the app on http://localhost:3000. Congrats, you're ready to rock!

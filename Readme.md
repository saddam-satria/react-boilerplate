<p style="text-align: center; padding: 20px 0px;">
<img src="https://www.shareicon.net/data/256x256/2016/08/01/640324_logo_512x512.png" width="120" />
</p>

# React Boilerplate Starter Kit V1

<p>this is a small starter kit pack react with webpack,babel loader,css loader,sass loader, eslint. I made this starter kit when I realized that create-react-app slow loadded in my computer. I hope this is can help you for build your front end stuff.<p>

## - First Configuration

```
git clone https://github.com/saddam-satria/react-boilerplate

yarn install
```

> Use yarn instead npm for package manager

## - Development Mode

```
yarn start
```

> the browser will serve [localhost:3000](http://localhost:3000)

## - Production Mode

```
yarn run build
```

> webpack will generate all bundle file into build folder

<h2 style="color: red; font-weight: 700;">
    TIPS
<h2>
<ul style="font-size: 16px;">
    <li>in the production mode, every files in public folder will copy to the build folder</li>
    <li>In the webpack dev server,I preffered use live reload instead of hot reload. If you want configure hot reload, change in webpack.config.js</li>
</ul>

## - Lint

```
yarn run lint:js
```

> eslint will fix the error problems with your code, based on .eslintrc config file, if you don't want it, change yourself style in .eslintrc.js file

## - Prettier

```
yarn run prettier
```

> prettier will clean up your code lines

<h3>Ongoing features</h3>
<ul>
    <li>Support TS</li>
    <li>testing-libary react, jest</li>
    <li>CSS module system</li>
    <li>husky pre commit </li>
    <li>redux configuration</li>
    <li>firebase configuration</li>
<ul>

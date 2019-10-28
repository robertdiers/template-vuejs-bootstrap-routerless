# vuejs-bootstrap-routerless

VueJS Frontend Starter with Bootstrap. (developed with Visual Studio Code)

ATTENTION: routerless version for small projects

### Coding Guidelines
* Every Vue component should be as independent as possible, it must be moveable to another project within seconds
* You can store meta and user information in vue-sessionstorage (vueuser object in example)
* Never store Vue component relevant information in a central store, save in component only - we do not want to build monoliths
* To transfer data to components (for example primary keys), please use 'transferdata' session property for all components (override with every switch)
* Please use axios to send server requests (see ExampleClick.vue)

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### In case dev server is not able to start on Linux (file watcher problem)
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

### Compiles and minifies for production
```
npm run build
```

### Run generated product from dist
```
serve -s dist
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

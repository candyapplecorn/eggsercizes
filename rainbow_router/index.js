// 0. If using a module system, call Vue.use(VueRouter)
const COLORS = ["red", "green", "blue", "purple", "orange"]

// 1. Define route components.
// These can be imported from other files
const COMPONENTS = COLORS.map(c => {
	return {
  	template: `<div style='background: ${c}'>You're in a color! ${c}</div>`,
    data: {
    	color: c
    }
  }
})

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later
let routes = COMPONENTS.map(c => {
	return {
  	path: `/${c.data.color}`,
    component: c
  }
})

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  data: {
  	colors: COLORS
  }
}).$mount('#app')

// Now the app has started!

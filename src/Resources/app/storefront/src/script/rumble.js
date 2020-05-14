import Plugin from 'src/plugin-system/plugin.class'

export default class Rumble extends Plugin {
    init(){
        console.info(window.PluginManager.getPluginInstancesFromElement(this.el))
    }
}

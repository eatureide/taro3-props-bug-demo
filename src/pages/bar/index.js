Component({
    properties: {
        name: {
            type: String,
            value: ''
        }
    },
    created() {
        console.log(this.properties)
    }
})
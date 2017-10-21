module.exports = {
	// sayHello: ()=>{
	// 	return 'hello'
	// },
	// addNumbers: function(value1, value2){
	// 	return value1 + value2;
	// }

	basic: (x,y,z)=> {
		return x + y + z 
	},

	combat: (health, damage)=> {
    // status= health - damage
    // if(status < 0){status = 0}

    // 	return status

    return health < damage ? 0 : health - damage
}
}
var appEvevts = true;

let app = new Vue({
	el: '#app',
	data: {
		mess: 'Add to Card',
		text: 'Vue.js Online shop',
		number: 0,
		card:[],
		states:{
			AL: 'Alabama',
			AR: 'Arizona',
			CA: 'California',
			NV: 'Nevada'
		},
		showProduct: true,
		product:{
			id: 1001,
			title: 'Product name',
			description: 'Information about product',
			price: 12345,
			image: 'photo/img.jpg',
			availableInventory: 5
		},
		order:{
			firstName:'',
			lastName:'',
			adress:'',
			city:'',
			state:'',
			zip:'',
			gift: false,
			method: 'Home'
		}
	},
	computed:{
		numberProducts: function(){
			return this.card.length;
		}
	},
	filters:{
		formatPrice(price){
		  if(!parseInt(price)){
		  	return '';
		  }else if (price>9999) {
		  	let priceStr = (price/100).toFixed(2);
		  	let priceArr = priceStr.split('').reverse();
		  	let index = 3;
		  	while (priceArr.length > index+3) {
		  		priceArr.splice(index+3, 0, ',')
		  		index += 4;
		  	}
		  	return ' $ ' + priceArr.reverse().join('');
		  }else{
		  	return ' $ ' + price.toFixed(2);
		  }
		},
		giftApp(gift){
			let answer = '';
			if(gift==true){
				return answer = 'Send As A Gift'
			}else{
				return answer = 'Do Not Send As A Gift'
			}
		}
	},
	methods: {
		addToCard: function (e) {
			if(this.card.length >= this.product.availableInventory){
				e.target.classList.add('stopBuy');
				this.mess = 'Not available';
				return;
			}else{
				e.target.classList.remove('stopBuy')
				if(this.mess != 'Add to Card'){
					this.mess = 'Add to Card';
				}
				this.card.push(this.product.id);
			}
		},
		showCheckout: function(){
			this.showProduct = this.showProduct ? false : true;
		},
		placeOrder: function(){
			if(Boolean(this.order.lastName)==true && Boolean(this.order.lastName)==true){
				if(Boolean(this.order.adress)==true && Boolean(this.order.city)==true){
					if (Boolean(this.order.state)==true && Boolean(this.order.zip)==true) {
						alert('Thanks for your order!');
					}else{
						alert('Fill in all fields');
					}
				}else{
					alert('Fill in all fields');
				}
			}else{
				alert('Fill in all fields');
			}
		}
	}
});
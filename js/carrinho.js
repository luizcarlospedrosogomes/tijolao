var item_old = JSON.parse(localStorage.getItem('cart')) || [];

$(document).on('click','.addCar', function(){ 
	
	var item_new ={
		id        : $(".id_bike").val(),
		preco     : $(".valor_uni").val(),
		nome      : $('.nome_prod').val(),
		quantidade: "1",
		src       :	$('.foto_smartphone').prop('src')
	};
	
	item_old.push(item_new);
	localStorage.setItem( 'cart', JSON.stringify(item_old));
	alert("Seu pedido foi adicionado ao carrinho");
	location.reload();
});


    var item      = JSON.parse(localStorage.getItem('cart'));
	var localhtml = "";
	var total 	  = 0;
	
	function removerItem(itemRemover){
		var del=confirm("Gostaria o item do  carrinho?");
			if (del==true){
				console.log(itemRemover);
			for (var i in item) {
				if(item[i].id == itemRemover) {
					item.splice(i,1);
					//return false;
				}
			}
			console.log(item);
			localStorage.setItem( 'cart', JSON.stringify(item));
			location.reload();
		}
		return del;	
		
	}
	
	function resetCarrinho(){
		var del=confirm("Gostaria de excluir todos os itens do carrinho?");
		if (del==true){
			localStorage.removeItem('cart');
			location.reload();
		}
		return del;		
		
	}
	
	window.onload = function () {
		
		$(".unicontraste").hide();
		$(".zoommenos").hide();
		$(".contato_mensagem").hide();
		
		for (var i in item) {
			localhtml += "<tr><td>" + item[i].nome +"</td>"
						   + "<td> <button type='button' class='btn btn-primary'>R$ "+ item[i].preco +"</button></td>"
						   + "<td> <button id='' onclick='removerItem("	+ item[i].id +");' type='button' class='btn btn-info'>Remover</button></td>"
						   + "<td> <img src='"+item[i].src+"' width='32'/></td>"
						+"</tr>";
			total = total + parseFloat(item[i].preco);
		}
		$('#carrinho').append(localhtml);
		$('#total').html("<button type='button' class='btn btn-primary'>R$ "+total+",00</button>");
		$(".carrinho_contador").html('<span style="background-color: orange;border-radius: 10px; margin-top:2px;" ><strong>'+ item_old.length+'</strong></span>');
	};
	/*
	function contraste(){
		 $(".contraste").css("background-color","black");
		 $(".contraste").css("fontSize", 20);
	}
	*/
	function contraste(){
		 $(".contraste").css("background-color","black");
		 $(".contraste").css("fontSize", 20);
		 $(".contraste").css('color','#000');
		 $(".inscontraste").hide();
		 $(".unicontraste").show();
	}
	function uniContraste(){
		$(".contraste").css("background-color","");
		$(".contraste").css("fontSize", "");
		$(".unicontraste").hide();
		$(".inscontraste").show();
	}
	
	function aumentar(){
		$(".zoom").css("fontSize", 30);
		$(".zoommais").hide();
		$(".zoommenos").show();
	}
	
	function diminuir(){
		$(".zoom").css("fontSize", "");
		$(".zoommenos").hide();
		$(".zoommais").show();
	}
	
	function login(){
		var usuarioNome = document.getElementById('usuario').value;
		var usuarioSenha = document.getElementById('senha').value;
		localStorage.setItem('usuario', usuarioNome);
		localStorage.setItem('senha', usuarioSenha);
		alert("Seja bem vindo " + localStorage.getItem('usuario') + "!");
	}

$(document).on('click','.contato_enviar', function(){ 
	$(".contato_mensagem").show();
});	

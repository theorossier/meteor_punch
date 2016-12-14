
Template.films.helpers
(
	{
		all_films : function ()
		{
			return films.find({}, {sort: {counter:-1}, limit:20});
		}
	}
);



Template.films.events
(
	{
		'click #plus' : function (event, template) {

   			 films.update(this._id,{
   			 	$set: {counter: this.counter+1}
   			 });
  		},

  		'click #moins' : function (event, template) {

   			 films.update(this._id,{
   			 	$set: {counter: this.counter-1}
   			 });
   			 //$("#plus, #moins").hide();
  		},


		'click #submit_film' : function ( event, template )
		{
			event.preventDefault();
			var $name = template.find( "#name" );
			var $comment = template.find( "#comment" );

			if ( $name.value !== "" && $comment.value !== "" )
			{

				films.insert( {name : $name.value, comment : $comment.value, counter : 0} );
			}
		}
	}
);


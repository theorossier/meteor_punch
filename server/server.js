Meteor.startup
(
	function ()
	{

		if ( !films.find().count() )
		{
			films.insert( { name : "OSS 117", comment : "L'apogée de Jean Dujardin", counter:0} );
		}
	}
);
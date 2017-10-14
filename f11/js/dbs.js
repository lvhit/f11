//<script src = "https://cdn.wilddog.com/js/client/current/wilddog.js" ></script>

function dbs_getWildDog()
{
	var config = {
	  syncURL: "https://wd5333673282unuryn.wilddogio.com"
	};
	wilddog.initializeApp(config);
	//console.log("haha");
	return wilddog.sync().ref();
}

function dbs_set(dbs_context)
{
	console.log("in dbs_set");
	dbs_getWildDog(dbs_url).set({dbs_key:dbs_value});	
}

function dbs_update(dbs_url, dbs_key, dbs_value, succCallBack, errCallBack)
{
	var data = {};
	data[dbs_key] = dbs_value;
	console.log("in dbs_update:dbs_url="+dbs_url);
	dbs_getWildDog(dbs_url).update(data, function(err) {
		if(err) {
			errCallBack&&errCallBack();
		} else {
			succCallBack&&succCallBack();
		}
	});
}

function dbs_push(dbs_url,data)
{
	var push = dbs_getWildDog(dbs_url).push(data);	
	return push.key();
}

function dbs_update_new(dbs_url,dbs_value)
{
	dbs_getWildDog(dbs_url).update(dbs_value);	
}

function dbs_query_on(dbs_url,dbs_type,callback)
{
	dbs_getWildDog(dbs_url).on(dbs_type,function(snap_shot){
		console.log("in dbs_query_on:dbs_url="+dbs_url);
		console.log("in dbs_query_on:snap_shot.val()="+JSON.stringify(snap_shot.val()));
		callback(snap_shot);
	});
}
function dbs_query_off(dbs_url,dbs_type,callback)
{
	dbs_getWildDog(dbs_url).off(dbs_type,function(snap_shot){
		callback(snap_shot);
	});
}

function dbs_query_once(dbs_url,dbs_type,callback)
{
	dbs_getWildDog(dbs_url).once(dbs_type,function(snap_shot){
		//console.log("in dbs_query_once----:snap_shot.val()="+JSON.stringify(snap_shot.val()));
		callback(snap_shot);
	});
}

function dbs_del(dbs_url,dbs_key)
{
	console.log("in dbs_del:dbs_url="+dbs_url);
	dbs_getWildDog(dbs_url).child(dbs_key).remove();
}


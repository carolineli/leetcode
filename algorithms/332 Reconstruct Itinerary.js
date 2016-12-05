/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    var map = {};
    var ret = [];
    createGraph(map, tickets);
    helper(ret, map, "JFK");
    return ret.reverse();
};

var createGraph = function(map, tickets) {
    for (var i = 0; i < tickets.length; i++) {
        if (!(tickets[i][0] in map)) {
            map[tickets[i][0]] = [tickets[i][1]];
        }
        else {
            map[tickets[i][0]].push(tickets[i][1]);
        }
    }

    for (var a in map) {
    	map[a].sort(sortAirport);
    }
};

var sortAirport = function(a, b) {
	var n = a.length;
	var ret = 0;
	for(i = 0; i < n; i++) {
		ret = a.charCodeAt(i) - b.charCodeAt(i);
		if (ret !== 0) {
			return ret;
		}
	}

	return ret;
}

var helper = function(ret, map, airport) {
    while(airport in map && map[airport].length > 0) {
    	var next = map[airport][0];
        map[airport].splice(0,1);
        helper(ret, map, next);
    }
    ret.push(airport);
};

var airports = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItinerary(airports));
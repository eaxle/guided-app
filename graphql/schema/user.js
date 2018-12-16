match (u:User)-[r:following]->() where u.id = "u#1"
return type(r), count(*)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Server.destroy_all
Channel.destroy_all
Message.destroy_all
ServerMembership.destroy_all

u1 = User.create({username: 'Tester', email: 'Test@Testing.com', password: 'password'})
u2 = User.create({username: 'DangerousDave', email: 'DangerousDave', password: 'password'})
u3 = User.create({username: 'SimpleSimon', email: 'SimpleSimon', password: 'password'})
u4 = User.create({username: 'RanchDubois', email: 'RanchDubois', password: 'password'})
u5 = User.create({username: 'BertMacklin', email: 'BertMacklin', password: 'password'})
u6 = User.create({username: 'ChaseMcDude', email: 'ChaseMcDude', password: 'password'})
u7 = User.create({username: 'ShyRonnie', email: 'ShyRonnie', password: 'password'})
u8 = User.create({username: 'KevinRoberts', email: 'KevinRoberts', password: 'password'})
u9 = User.create({username: 'BlizzardMan', email: 'BlizzardMan', password: 'password'})
u10 = User.create({username: 'Connor4Real', email: 'Connor4Real', password: 'password'})
u11 = User.create({username: 'LloydChristmas', email: 'LloydChristmas', password: 'password'})
u12 = User.create({username: 'HarryDunne', email: 'HarryDunne', password: 'password'})
u13 = User.create({username: 'McNuggs', email: 'McNuggs', password: 'password'})
u14 = User.create({username: 'RayRomano', email: 'RayRomano', password: 'password'})
u15 = User.create({username: 'ChadKroger', email: 'ChadKroger', password: 'password'})
u16 = User.create({username: 'BarryZuckercorn', email: 'BarryZuckercorn', password: 'password'})

s1 = Server.create({server_owner_id: u1.id, server_name: 'Swerver'})
s2 = Server.create({server_owner_id: u1.id, server_name: 'Cool Server'})
s3 = Server.create({server_owner_id: u2.id, server_name: 'Staines Massive'})
s4 = Server.create({server_owner_id: u3.id, server_name: 'This is a Server'})
s5 = Server.create({server_owner_id: u4.id, server_name: 'Ranch Revolution'})
s6 = Server.create({server_owner_id: u5.id, server_name: 'Mouserat'})

sm1 = ServerMembership.create({server_id: s1.id, user_id: u1.id})
sm2 = ServerMembership.create({server_id: s1.id, user_id: u2.id})

sm3 = ServerMembership.create({server_id: s2.id, user_id: u1.id})
sm4 = ServerMembership.create({server_id: s2.id, user_id: u2.id})
sm5 = ServerMembership.create({server_id: s2.id, user_id: u3.id})
sm6 = ServerMembership.create({server_id: s2.id, user_id: u4.id})
sm7 = ServerMembership.create({server_id: s2.id, user_id: u5.id})

sm8 = ServerMembership.create({server_id: s3.id, user_id: u2.id})
sm9 = ServerMembership.create({server_id: s3.id, user_id: u3.id})

sm10 = ServerMembership.create({server_id: s4.id, user_id: u3.id})
sm11 = ServerMembership.create({server_id: s4.id, user_id: u5.id})

sm12 = ServerMembership.create({server_id: s5.id, user_id: u4.id})
sm13 = ServerMembership.create({server_id: s5.id, user_id: u5.id})

sm14 = ServerMembership.create({server_id: s6.id, user_id: u5.id})
sm15 = ServerMembership.create({server_id: s6.id, user_id: u2.id})


c1 = Channel.create({channel_name: "Cool Channel", server_id: s2.id})
c2 = Channel.create({channel_name: "Cooler Channel", server_id: s2.id})
c3 = Channel.create({channel_name: "Coolest Channel", server_id: s2.id})

c4 = Channel.create({channel_name: "This is a Channel", server_id: s4.id})

c5 = Channel.create({channel_name: "Centurion Club: Elite VIP Area (Sponsored by SoBe Lifewater)", server_id: s6.id})
c6 = Channel.create({channel_name: "The Department of Homeland Obscurity", server_id: s6.id})

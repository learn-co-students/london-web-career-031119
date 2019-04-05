Intro to Rails
==============


## SWBATs

- [ ] Create a new Rails application
- [ ] Describe similarities between Sinatra routing & Rails routing
- [ ] Generate a controller
- [ ] Create actions/methods for a RESTful controller
- [ ] Create views
- [ ] Generate a model
- [ ] Create routes

SAME:
- Migration files
- Relationships in models
- Passing data from controller to view with instance variables

DIFFERENT:
- `rake db:create_migration` vs Rails Generators `rails g migration <name>`
- `rails g model <class_name> [...attrbutes]` to generate model and migration
- `rails c` for console
- `exit` to exit console
- Console is IRB in Rails but Pry in Sinatra
- Implicit Rendering in Rails automatically if no render is specified
- Writing routes in `config/routes.rb`
- Using `resources` to write the RESTful routes for a model

[A Thing of the Past](https://www.youtube.com/watch?v=9ML8PrP3A8E)

Laws >-< Politicians
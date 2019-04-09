Rails Forms & REST
==================

## SWBATs

* [x] Use path helpers and customize them.
* [x] Distinguish between `form_for` vs `form_tag` based on use case.
* [x] Understand the need for strong params & CSRF tokens.
* [x] Begin thinking about checking information before creating things.
* [x] Begin thinking about building a better UX - `link_to`, `button_to`, `button_tag`.
* [x] Create UI that allows the user to update and delete models
* [x] User partials to speed up the creation of views

## Cambio League

Players >- PlayerGame -< Games

Player
  - name
  - age
  - bio
  - special_skill

Game
  - time
  - room
  - prize

`rails g model Player name age:integer bio:text special_skill` => creates model file and migration, as well as automatically writes code in migration file
`--no-test-framework`

`rails g controller players` => Just generates a blank controller


`rails g resource Player name age:integer bio:text special_skill` => creates basic controller file, folder for views, model file, and migration file (with code inserted), as well as writes `resources :player` in your routes file.

`rails g resource/model Example column:belongs_to` => quickly create belongs_to relationship in model and index on that foreign key

## Outline


1. New domain that extends to tomorrow.
  * `rails g resource ModelName column:type`
  * RESTful routes via `resources`, `only`, `except`
2. Build out `index`, `show`, `delete`.
  * Path Helpers, `rails routes`, custom path helpers
  * `<a>` vs `link_to`, `method: HTTP_Verb`
  * `button_to` vs `button_tag`
3. Build out `new`, `create`, `edit`, `update`.
  * `form_for` vs `form_tag`
  * CSRF Token
  * strong params
4. Extra Stuff:
  * Abstraction! Partials, `before_action`

---
title: Database relationships
---

When we use a foreign key to link rows between tables, we form a database relationship. These relationships come in three types, many-to-one, one-to-one, and many-to-many.

## Many-to-one

When you add a foreign key to a table, you are allowing many rows of that table to relate to one row from another table.

- If `photo` has a foreign key to `user`, many photos can be added by a user.
- If `message` has a foreign key `from_id` to `user`, many messages can be sent by a user.
- If `message` has a foreign key `to_id` to `user`, many messages can be sent to a user.
- If `part` has a foreign key to `manufacturer`, many parts can be made by a manufacturer.
- If `answer` has a foreign key to `question`, there can be many answers to a question.

This is also referred to as a _belongs-to_ relationship, as in "an answer belongs to a question."

This relationship works both ways. Given a question, you can find its answers; given an answer, you can find its question. From the viewpoint of the question, this is a _one-to-many_ or _has-many_ relationship, as in "a question has many answers."

## One-to-one

A one-to-one relationship also uses a foreign key, but adds a constraint that the foreign key value must be unique. Each row of the parent table can only be referenced once. This is extremely rare in practice. There are very few problems this can solve that are not better solved by adding more fields to the parent table.

## Many-to-many

Some relationships are not naturally parent-to-child, but instead an interrelated web between two different types of things. Here are some examples:

- For a magazine site, articles can be in multiple categories and each category has multiple articles in it.
- For a photo sharing site, each gallery can have multiple photos in it and each photo can be in multiple galleries.
- For a time-tracking app, each employee can be assigned to multiple projects and each project can have multiple employees on it.

These _many-to-many_ relationships also use foreign keys, but not directly between the related tables. Instead, a third table is used. This _join table_ has foreign keys to both related models. Let's see an example of how this works.

## Gallery example

### `photo` table

| id | user_id | filename       |
|----|---------|----------------|
| 1  | 1       | profile.jpg    |
| 2  | 1       | two-cats.png   |
| 3  | 3       | jumanji.jpg    |
| 4  | 2       | bat-colony.jpg |

### `gallery` table

| id | name    |
|----|---------|
| 1  | Animals |
| 2  | Movies  |

### `gallery_photos` table (join table)

| id | photo_id | gallery_id |
|----|----------|------------|
| 1  | 2        | 1          |
| 2  | 3        | 1          |
| 3  | 4        | 1          |
| 4  | 3        | 2          |

Looking at the `gallery_photos` table, you can see that there are foreign keys to `photo` and `gallery`.

- Photo 1 is not in any galleries.
- Photo 2 is in gallery 1.
- Photo 3 is in galleries 1 and 2.
- Photo 4 is in gallery 1.
- Gallery 1 contains photos 2, 3, and 4.
- Gallery 2 contains photo 3.


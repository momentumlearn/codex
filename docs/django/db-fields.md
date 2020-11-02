---
title: Database fields
---

We know that each column in a database is also called a _field_. Those fields have a _type_, which indicates the type of data allowed to be stored in that field.

The list of allowed types differs by database, but there are some ones you will always see.

| Common name | Django model field name | Database-specific names          |
| ----------- | ----------------------- | -------------------------------- |
| int         | IntegerField            | INT, INTEGER                     |
| float       | FloatField              | FLOAT, DOUBLE PRECISION, REAL    |
| string      | CharField, TextField    | TEXT, VARCHAR, CHARACTER VARYING |
| bool        | BooleanField            | BOOL, BOOLEAN                    |
| date        | DateField               | DATE                             |
| datetime    | DateTimeField           | TIMESTAMP, DATETIME              |

In the above table, the "common name" is what you will often hear these called, and what we'll use to represent them in this text. The one you may not immediately recognize is _float_. This is a _floating-point number_. You might call this a decimal or just a number normally, but there's one different you should know. A floating-point number isn't necessarily precise. They are fine for many things, but don't store money or anything else you have to keep completely precise in them. Most databases have a decimal field you can use for precision.

Besides a field type, each field has some options that might be set:

- *UNIQUE* - all rows have to have a unique value in this field
- *NULL* - this field is allowed to be null, or have nothing in it
- *NOT NULL* - this field isn't allowed to be null. This is the default and assumed.
- *DEFAULT* - this field has a default value if it's not explicitly set

## The primary key field

The primary key that we've seen so far is a special field. In all our examples, it's called `id` and is an integer. Neither of these are a requirement, but we will continue to use them. When Django creates a table, it makes an `id` column that is assigned an auto-incrementing number when a new record is inserted into the table. We will use this default.

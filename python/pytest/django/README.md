This recipe shows how to run pre-test commands and script in `pytest-django`.

It is useful if you need to load fixtures or prepare your test database before running any test. To do so, put `conftest.py` in the root of your django
project and custmize `django_db_setup`.

If you are using a custom convention for structuring your tests, you need to update `python_files` patterns in `pytest.ini`.

The example in this recipe runs a django command called `i18n`, which loads localization entries into the test database.

> Note: if you are using `django.test.TestCase`, you can load your fixtures in `setUp` method of `TestCase` too.

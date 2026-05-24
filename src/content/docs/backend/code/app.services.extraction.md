---
title: app.services.extraction
---

<!-- markdownlint-disable -->

<a href="../../../../../../app/services/extraction.py#L0"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

# <kbd>module</kbd> `app.services.extraction`





---

<a href="../../../../../../app/services/extraction.py#L17"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `extract_archive`

```python
extract_archive(archive_path: str, extract_to: Path)
```






---

<a href="../../../../../../app/services/extraction.py#L26"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `clean_mac_files`

```python
clean_mac_files(directory: Path)
```






---

<a href="../../../../../../app/services/extraction.py#L41"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_directory_depth`

```python
get_directory_depth(path: Path) → int
```

Return the maximum depth of the directory tree rooted at path (1 = only files/dirs directly inside). 


---

<a href="../../../../../../app/services/extraction.py#L52"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `extract_and_merge_dataset`

```python
extract_and_merge_dataset(dataset_name: str, archive_path: str)
```






---

<a href="../../../../../../app/services/extraction.py#L75"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `merge_directories`

```python
merge_directories(src: Path, dst: Path)
```






---

<a href="../../../../../../app/services/extraction.py#L163"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `is_os_generated_file`

```python
is_os_generated_file(file_path_str: str) → bool
```






---

<a href="../../../../../../app/services/extraction.py#L173"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `extract_annotation`

```python
extract_annotation(
    by: str,
    dataset_name: str,
    archive_path: str,
    known_annotators: list[str] = None,
    known_cases: list[str] = None
) → list[str]
```

Extracts an annotation archive (.zip or .gz) into a standardized directory structure, ignoring arbitrary outer wrappers and validating annotators and case names. 



**Args:**
 
 - <b>`by`</b> (str):  The identifier of who/what is uploading (used in the destination path). 
 - <b>`dataset_name`</b> (str):  The name of the dataset. 
 - <b>`archive_path`</b> (str):  The local path to the temporary .zip or .gz archive file. 
 - <b>`annotators`</b> (list[str], optional):  Allowed annotator names. Defaults to None. 
 - <b>`known_cases`</b> (list[str], optional):  Allowed case names. Defaults to None. 



**Raises:**
 
 - <b>`ValueError`</b>:  If the archive format is unsupported, or if internal paths fail validation. 



**Returns:**
 
 - <b>`list[str]`</b>:  A deduplicated list of the base logical paths that were extracted  (e.g., ['annotator1/none/case_001', 'case_002']). 


---

<a href="../../../../../../app/services/extraction.py#L252"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `update_annotation_file`

```python
update_annotation_file(
    by: str,
    base: str,
    dataset_name: str,
    path: str,
    file_path: str,
    original_filename: str = None
)
```








---

_This file was automatically generated via [lazydocs](https://github.com/ml-tooling/lazydocs)._

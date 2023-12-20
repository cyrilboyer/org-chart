Org chart exercise
====

We ask candidates to get this exercise back within 3 days.
It should take approximately 3-4 hours to finish this task. Please let us know whether this is possible or if you need
more time.

This is a task for showing data handling & creative visual skills.
Feel free to use the technology/framework you are the most comfortable with. Pseudo-code will also be accepted as long
as it's clean, descriptive and taking care of edge-cases.

If you don't have time to finish the task, please leave comments describing what you wanted to have implemented.

# Exercice

We in Company X, need to model how our company is structured so we can help our new employees have a better overview of our
company structure.

We have our root node (only one, in our case the CEO) and several child nodes.
Each of these nodes may have its own children.

It can be structured as something like this:
```
        root
       /    \
      a      b
      |
      c
    / 	\
   d     e
```

## We need a simple interface that will visualize the data in a browser:

1. Visualize the entire data structure (use the example data provided below) in one view.
2. When interacting with one of the nodes (fx. by clicking on it), the view should update by displaying only that node and it's children.
2. Allow for a maximum of 4 layers of children.

Please upload your solution to a git repository (BitBucket, GitLab or GitHub) and provide a README.md file with
documentation.

Feel free to describe, what you would have improved in your solution if more time was given?

## Example data

```
{
  "id": 1,
  "name": "CEO",
  "parent": null,
  "height": 0,
  "department": "Executive",
  "programmingLanguage": null,
  "children": [
    {
      "id": 2,
      "name": "Manager A",
      "parent": 1,
      "height": 1,
      "department": "Tech",
      "programmingLanguage": null,
      "children": [
        {
          "id": 5,
          "name": "Developer A1",
          "parent": 2,
          "height": 2,
          "department": "Tech",
          "programmingLanguage": "JavaScript",
          "children": []
        },
        {
          "id": 6,
          "name": "Developer A2",
          "parent": 2,
          "height": 2,
          "department": "Tech",
          "programmingLanguage": "PHP",
          "children": []
        }
      ]
    },
    {
      "id": 3,
      "name": "Manager B",
      "parent": 1,
      "height": 1,
      "department": "Marketing",
      "programmingLanguage": null,
      "children": [
        {
          "id": 7,
          "name": "Employee B1",
          "parent": 3,
          "height": 2,
          "department": "Marketing",
          "programmingLanguage": null,
          "children": []
        },
        {
          "id": 8,
          "name": "Employee B2",
          "parent": 3,
          "height": 2,
          "department": "Marketing",
          "programmingLanguage": null,
          "children": []
        }
      ]
    }
  ]
}
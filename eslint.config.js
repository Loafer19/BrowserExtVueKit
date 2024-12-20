export default [
  {
    rules: {
      'brace-style': [
        'error',
        '1tbs'
      ],
      'comma-dangle': [
        'error',
        'never'
      ],
      'eol-last': [
        'error',
        'always'
      ],
      'indent': [
        'error',
        2
      ],
      'linebreak-style': [
        'error',
        'windows'
      ],
      'lines-between-class-members': [
        'error',
        'always'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'keyword-spacing': [
        'error',
        {
          'before': true,
          'after': true
        }
      ],
      'padding-line-between-statements': [
        'error',
        {
          'blankLine': 'always',
          'prev': '*',
          'next': 'return'
        },
        { 'blankLine': 'always', 'prev': 'import', 'next': '*' },
        { 'blankLine': 'never', 'prev': 'import', 'next': 'import' }
      ],
      'semi': [
        'error',
        'never'
      ],
      'sort-imports': [
        'error', {
          'ignoreCase': false,
          'ignoreDeclarationSort': false,
          'ignoreMemberSort': false,
          'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
          'allowSeparatedGroups': false
        }
      ],
      'space-before-blocks': [
        'error',
        'always'
      ]
    }
  }
]

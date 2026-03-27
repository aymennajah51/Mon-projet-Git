# Undo Changes with Git

## git restore

- Permet d'annuler les changements **non commités** dans les fichiers.
- Les commits précédents **ne sont pas affectés**.
- Ex: `git restore README.md`

## git reset

- Permet de réinitialiser l'historique des commits.
- Peut supprimer des commits si utilisé avec `--hard`.
- Plus puissant mais **peut casser l'historique**.

## Différence principale

- `git restore` → annule uniquement les changements locaux, pas les commits  
- `git reset` → peut modifier l’historique des commits
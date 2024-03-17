/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };

class Solution {
    public:
        int maxPath = 0;
    
        void solve(TreeNode* root, int left, int right){
            if (root == NULL)
                return;
            maxPath = max({maxPath, left, right});
    
            solve(root->left, right+1, 0);
            solve(root->right, 0, left+1);
            
        }
    
        int longestZigZag(TreeNode* root) {
            solve(root, 0, 0);
            return maxPath;
        }
    };
*/
/*
class Solution {
    public:
        int maxPath = 0;
    
        void solve(TreeNode* root, int steps, bool goLeft){
            if (root == NULL)
                return;
            maxPath = max(maxPath,steps);
    
            if(goLeft == true){
                solve(root->left, steps+1, false);
                solve(root->right, 1, true);
            }
            else{
                solve(root->right, steps+1, true);
                solve(root->left, 1, false);
            }
        }
    
        int longestZigZag(TreeNode* root) {
            solve(root, 0, true);
            solve(root, 0, false);
            return maxPath;
        }
    };
    */
import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addressAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Batch
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const batchAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_projects', internalType: 'address[]', type: 'address[]' },
      { name: '_slotCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'controller',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentWinners',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectAddress', internalType: 'address', type: 'address' },
    ],
    name: 'getProjectStatus',
    outputs: [
      {
        name: '',
        internalType: 'enum ProjectVoting.ProjectStatus',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_project', internalType: 'address', type: 'address' },
    ],
    name: 'hasVotedForProject',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'inInvestmentPeriod',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investmentEnd',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'projectToVotesIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'projectVoteCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_finalBonus',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_initialBonus',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_projects',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_singleSlotDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_voteLimitPerUser',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_votingPeriod',
    outputs: [
      {
        name: '',
        internalType: 'struct ICommon.Period',
        type: 'tuple',
        components: [
          { name: 'start', internalType: 'uint256', type: 'uint256' },
          { name: 'end', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'projects',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'end', internalType: 'uint256', type: 'uint256' },
      {
        name: 'extraInvestmentDuration',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setVotingPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'singleSlotDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'slotCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'userHasVotedForProject',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'userVoteCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectAddress', internalType: 'address', type: 'address' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'vote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'votes',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'votesIndexToProject',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingPeriod',
    outputs: [
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'end', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'weightedProjectVoteCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Citizend
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const citizendAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_targetOwner', internalType: 'address', type: 'address' },
      { name: '_lockEnd', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PAUSER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockEnd',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpausePublic',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'EnforcedPause' },
  { type: 'error', inputs: [], name: 'ExpectedPause' },
  {
    type: 'error',
    inputs: [{ name: 'time', internalType: 'uint256', type: 'uint256' }],
    name: 'TooEarly',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CitizendConstructorTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const citizendConstructorTestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'testInitialMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'testSetsCorrectParameters',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Controller
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const controllerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_staking', internalType: 'address', type: 'address' },
      { name: '_token', internalType: 'address', type: 'address' },
      { name: '_merkleRoot', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'BATCH_MANAGER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LEGAL_MANAGER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PROJECT_MANAGER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_project', internalType: 'address', type: 'address' },
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'canInvestInPeoplesPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'canInvestInStakersPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'canVote',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_projects', internalType: 'address[]', type: 'address[]' },
      { name: '_slotCount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_project', internalType: 'address', type: 'address' }],
    name: 'getBatchForProject',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'hasBatchManagerRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'hasLegalManagerRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'hasProjectManagerRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_project', internalType: 'address', type: 'address' },
      { name: '_batch', internalType: 'address', type: 'address' },
    ],
    name: 'isProjectInBatch',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'merkleRoot',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'projects',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'projectsToBatches',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_description', internalType: 'string', type: 'string' },
      { name: '_token', internalType: 'address', type: 'address' },
      { name: '_saleSupply', internalType: 'uint256', type: 'uint256' },
      { name: '_rate', internalType: 'uint256', type: 'uint256' },
      { name: '_investmentToken', internalType: 'address', type: 'address' },
    ],
    name: 'registerProject',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'batch', internalType: 'address', type: 'address' },
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'end', internalType: 'uint256', type: 'uint256' },
      {
        name: 'extraInvestmentDuration',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setBatchVotingPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'staking',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'batch',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'BatchCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'project',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ProjectRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CtzndSale
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const ctzndSaleAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_paymentToken', internalType: 'address', type: 'address' },
      { name: '_rate', internalType: 'uint256', type: 'uint256' },
      { name: '_start', internalType: 'uint256', type: 'uint256' },
      { name: '_end', internalType: 'uint256', type: 'uint256' },
      { name: '_totalTokensForSale', internalType: 'uint256', type: 'uint256' },
      { name: '_minTarget', internalType: 'uint256', type: 'uint256' },
      { name: '_maxTarget', internalType: 'uint256', type: 'uint256' },
      { name: '_startRegistration', internalType: 'uint256', type: 'uint256' },
      { name: '_endRegistration', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'InvalidLeaf' },
  { type: 'error', inputs: [], name: 'MaxTargetReached' },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Claim',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Purchase',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Refund',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CAP_VALIDATION_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CAP_VALIDATOR_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'allocated',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'allocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'end',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endRegistration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'individualCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    name: 'investorAmountAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxContribution',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxTarget',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'merkleRoot',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minContribution',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minTarget',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paymentToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_paymentAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'paymentTokenToToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'refundAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideCache',
    outputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForCap', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForNextCap', internalType: 'uint256', type: 'uint256' },
      { name: 'largest', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideState',
    outputs: [
      {
        name: '',
        internalType: 'enum RisingTide.RisingTideState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'risingTide_applyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_isValidCap',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalAllocatedUncapped',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validating',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_end', internalType: 'uint256', type: 'uint256' }],
    name: 'setEnd',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_cap', internalType: 'uint256', type: 'uint256' }],
    name: 'setIndividualCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_maxTarget', internalType: 'uint256', type: 'uint256' }],
    name: 'setMaxTarget',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_merkleRoot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'setMerkleRoot',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_minContribution', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMinContribution',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_minTarget', internalType: 'uint256', type: 'uint256' }],
    name: 'setMinTarget',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_start', internalType: 'uint256', type: 'uint256' }],
    name: 'setStart',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    name: 'setToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'start',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startRegistration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenToPaymentToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalTokensForSale',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalUncappedAllocations',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'uncappedAllocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawn',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const ctzndSaleAddress = {
  11155111: '0xF2EAcaa2b8374d648b2F1bab51C0e0aDD18Ec0D1',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const ctzndSaleConfig = {
  address: ctzndSaleAddress,
  abi: ctzndSaleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DSTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dsTestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DeployScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const deployScriptAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'run',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DevDeployScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const devDeployScriptAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'run',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Burnable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20BurnableAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Pausable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20PausableAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'EnforcedPause' },
  { type: 'error', inputs: [], name: 'ExpectedPause' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FractalRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fractalRegistryAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_root', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'addDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'fractalId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'addUserAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'userId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'listId', internalType: 'string', type: 'string' },
    ],
    name: 'addUserToList',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getFractalId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'userId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'listId', internalType: 'string', type: 'string' },
    ],
    name: 'isUserInList',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'removeDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'removeUserAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'userId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'listId', internalType: 'string', type: 'string' },
    ],
    name: 'removeUserFromList',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlAbi = [
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IBatch
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iBatchAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'projectAddress', internalType: 'address', type: 'address' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'vote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IController
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iControllerAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_project', internalType: 'address', type: 'address' },
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'canInvestInPeoplesPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'canInvestInStakersPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'canVote',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projects', internalType: 'address[]', type: 'address[]' },
      { name: '_slotCount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_project', internalType: 'address', type: 'address' }],
    name: 'getBatchForProject',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'hasLegalManagerRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'hasProjectManagerRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_project', internalType: 'address', type: 'address' },
      { name: '_batch', internalType: 'address', type: 'address' },
    ],
    name: 'isProjectInBatch',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_description', internalType: 'string', type: 'string' },
      { name: '_token', internalType: 'address', type: 'address' },
      { name: '_saleSupply', internalType: 'uint256', type: 'uint256' },
      { name: '_rate', internalType: 'uint256', type: 'uint256' },
      { name: '_investmentToken', internalType: 'address', type: 'address' },
    ],
    name: 'registerProject',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'batch', internalType: 'address', type: 'address' },
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'end', internalType: 'uint256', type: 'uint256' },
      {
        name: 'extraInvestmentDuration',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setBatchVotingPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721TokenReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721TokenReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPoolAbi = [
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'allocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_investor', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'invest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'refundableAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_cap', internalType: 'uint256', type: 'uint256' }],
    name: 'setIndividualCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'uncappedAllocation',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IProject
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iProjectAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'approveByLegal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approveByManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approvedByLegal',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approvedByManager',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'hasTokens',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_peoplesAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_stakersAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'invest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'investmentTokenToToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isReadyForListing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'peoplesPool',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakersPool',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenToInvestmentToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISale
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSaleAbi = [
  {
    type: 'function',
    inputs: [{ name: '_who', internalType: 'address', type: 'address' }],
    name: 'allocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_paymentAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paymentToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_paymentAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'paymentTokenToToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'refundAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'cap', internalType: 'uint256', type: 'uint256' }],
    name: 'setIndividualCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenToPaymentToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_who', internalType: 'address', type: 'address' }],
    name: 'uncappedAllocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IStaking
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iStakingAbi = [
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'hasStaked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'rebond',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'unbond',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'withdrawable',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVesting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVestingAbi = [
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'claimable',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'claimed',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'cliffMonths', internalType: 'uint16', type: 'uint16' },
      { name: 'vestingMonths', internalType: 'uint16', type: 'uint16' },
      { name: 'nonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'createPrivateSaleVest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'privateSaleCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'publicSaleCliffMonths',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'publicSaleVestingMonths',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'totalAllocated',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MerkleProof
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const merkleProofAbi = [
  { type: 'error', inputs: [], name: 'MerkleProofInvalidMultiproof' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc721Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockProject
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockProjectAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'approveByLegal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approveByManager',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approvedByLegal',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approvedByManager',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'hasTokens',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '_peoplesAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_stakersAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'invest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'investmentTokenToToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isReadyForListing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'merkleRoot',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'peoplesPool',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakersPool',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_supply', internalType: 'uint256', type: 'uint256' },
      { name: '_investmentToken', internalType: 'address', type: 'address' },
    ],
    name: 'test_createPeoplesPool',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_supply', internalType: 'uint256', type: 'uint256' },
      { name: '_investmentToken', internalType: 'address', type: 'address' },
    ],
    name: 'test_createStakersPool',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenToInvestmentToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  { type: 'error', inputs: [], name: 'InvalidLeaf' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockSale
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockSaleAbi = [
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'allocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'string', type: 'string' }],
    name: 'calls',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paymentToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_x', internalType: 'uint256', type: 'uint256' }],
    name: 'paymentTokenToToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'refundAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'setIndividualCap',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'test_Called',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'test_addAllocation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'test_addRefund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_x', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenToPaymentToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'uncappedAllocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'pure',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pausable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pausableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  { type: 'error', inputs: [], name: 'EnforcedPause' },
  { type: 'error', inputs: [], name: 'ExpectedPause' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PeoplesPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const peoplesPoolAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_saleSupply', internalType: 'uint256', type: 'uint256' },
      { name: '_investmentToken', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CAP_VALIDATION_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'allocation',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'individualCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_investor', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'invest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investmentToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    name: 'investorAmountAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'project',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'refundableAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideCache',
    outputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForCap', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForNextCap', internalType: 'uint256', type: 'uint256' },
      { name: 'largest', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideState',
    outputs: [
      {
        name: '',
        internalType: 'enum RisingTide.RisingTideState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'risingTide_applyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_isValidCap',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalAllocatedUncapped',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validating',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'saleSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_cap', internalType: 'uint256', type: 'uint256' }],
    name: 'setIndividualCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalUncappedAllocations',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'uncappedAllocation',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Refund',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'CAP_VALIDATION_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'allocation',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'individualCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_investor', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'invest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investmentToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    name: 'investorAmountAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'project',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'refundableAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideCache',
    outputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForCap', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForNextCap', internalType: 'uint256', type: 'uint256' },
      { name: 'largest', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideState',
    outputs: [
      {
        name: '',
        internalType: 'enum RisingTide.RisingTideState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'risingTide_applyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_isValidCap',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalAllocatedUncapped',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validating',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'saleSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_cap', internalType: 'uint256', type: 'uint256' }],
    name: 'setIndividualCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalUncappedAllocations',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'uncappedAllocation',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Refund',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Project
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const projectAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_description', internalType: 'string', type: 'string' },
      { name: '_token', internalType: 'address', type: 'address' },
      { name: '_saleSupply', internalType: 'uint256', type: 'uint256' },
      { name: '_rate', internalType: 'uint256', type: 'uint256' },
      { name: '_investmentToken', internalType: 'address', type: 'address' },
      { name: '_merkleRoot', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MUL',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approveByLegal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approveByManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approvedByLegal',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approvedByManager',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'controller',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'hasTokens',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_peoplesAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_stakersAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'invest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'investmentTokenToToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isReadyForListing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'merkleRoot',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'peoplesPool',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'saleSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakersPool',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenToInvestmentToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  { type: 'error', inputs: [], name: 'InvalidLeaf' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProjectHelpers
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const projectHelpersAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'MUL',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProjectTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const projectTestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'proofs',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'testInvest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'testInvestShouldRevertWithInvalidProof',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProjectVoting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const projectVotingAbi = [
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'projectToVotesIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'projectVoteCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_finalBonus',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_initialBonus',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_projects',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_singleSlotDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_voteLimitPerUser',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_votingPeriod',
    outputs: [
      {
        name: '',
        internalType: 'struct ICommon.Period',
        type: 'tuple',
        components: [
          { name: 'start', internalType: 'uint256', type: 'uint256' },
          { name: 'end', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'userHasVotedForProject',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'userVoteCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'votes',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'votesIndexToProject',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'weightedProjectVoteCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReentrancyGuard
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reentrancyGuardAbi = [
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RisingTide
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const risingTideAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'CAP_VALIDATION_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'individualCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'n', internalType: 'uint256', type: 'uint256' }],
    name: 'investorAmountAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideCache',
    outputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForCap', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForNextCap', internalType: 'uint256', type: 'uint256' },
      { name: 'largest', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideState',
    outputs: [
      {
        name: '',
        internalType: 'enum RisingTide.RisingTideState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'risingTide_applyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_isValidCap',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalAllocatedUncapped',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validating',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RisingTideTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const risingTideTestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'testGitbookExampleCorrectly',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'testGitbookExampleFailsWithLargerCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'testGitbookExampleFailsWithSmallerCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'testSmallExampleCorrectly',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'testSmallExampleFails',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeErc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'currentAllowance', internalType: 'uint256', type: 'uint256' },
      { name: 'requestedDecrease', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeERC20FailedDecreaseAllowance',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sale
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const saleAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_paymentToken', internalType: 'address', type: 'address' },
      { name: '_rate', internalType: 'uint256', type: 'uint256' },
      { name: '_start', internalType: 'uint256', type: 'uint256' },
      { name: '_end', internalType: 'uint256', type: 'uint256' },
      { name: '_totalTokensForSale', internalType: 'uint256', type: 'uint256' },
      { name: '_minTarget', internalType: 'uint256', type: 'uint256' },
      { name: '_maxTarget', internalType: 'uint256', type: 'uint256' },
      { name: '_startRegistration', internalType: 'uint256', type: 'uint256' },
      { name: '_endRegistration', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CAP_VALIDATION_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CAP_VALIDATOR_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'allocated',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'allocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_merkleProof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'end',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endRegistration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'individualCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    name: 'investorAmountAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxContribution',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxTarget',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'merkleRoot',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minContribution',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minTarget',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paymentToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_paymentAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'paymentTokenToToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'refundAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideCache',
    outputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForCap', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForNextCap', internalType: 'uint256', type: 'uint256' },
      { name: 'largest', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideState',
    outputs: [
      {
        name: '',
        internalType: 'enum RisingTide.RisingTideState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'risingTide_applyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_isValidCap',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalAllocatedUncapped',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validating',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_end', internalType: 'uint256', type: 'uint256' }],
    name: 'setEnd',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_cap', internalType: 'uint256', type: 'uint256' }],
    name: 'setIndividualCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_maxTarget', internalType: 'uint256', type: 'uint256' }],
    name: 'setMaxTarget',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_merkleRoot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'setMerkleRoot',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_minContribution', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMinContribution',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_minTarget', internalType: 'uint256', type: 'uint256' }],
    name: 'setMinTarget',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_start', internalType: 'uint256', type: 'uint256' }],
    name: 'setStart',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    name: 'setToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'start',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startRegistration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenToPaymentToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalTokensForSale',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalUncappedAllocations',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'uncappedAllocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawn',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Claim',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Purchase',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Refund',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'InvalidLeaf' },
  { type: 'error', inputs: [], name: 'MaxTargetReached' },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

/**
 *
 */
export const saleAddress = {
  31337: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
} as const

/**
 *
 */
export const saleConfig = { address: saleAddress, abi: saleAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SaleTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const saleTestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_InitialContribution',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Claim',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Purchase',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Refund',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Script
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const scriptAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StakersPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stakersPoolAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_saleSupply', internalType: 'uint256', type: 'uint256' },
      { name: '_investmentToken', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CAP_VALIDATION_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'allocation',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'individualCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_investor', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'invest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investmentToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    name: 'investorAmountAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'project',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'refundableAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideCache',
    outputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForCap', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForNextCap', internalType: 'uint256', type: 'uint256' },
      { name: 'largest', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideState',
    outputs: [
      {
        name: '',
        internalType: 'enum RisingTide.RisingTideState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'risingTide_applyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_isValidCap',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalAllocatedUncapped',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validating',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'saleSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_cap', internalType: 'uint256', type: 'uint256' }],
    name: 'setIndividualCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalUncappedAllocations',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'uncappedAllocation',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Refund',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Staking
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stakingAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UNBONDING_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'hasStaked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'rebond',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'stakes',
    outputs: [
      { name: 'total', internalType: 'uint256', type: 'uint256' },
      { name: 'bonded', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'unbond',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'unbondings',
    outputs: [
      { name: 'first', internalType: 'uint128', type: 'uint128' },
      { name: 'next', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'withdrawable',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Rebond',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'StakeFunds',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Unbond',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdrawal',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdAssertions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdAssertionsAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdInvariant
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdInvariantAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testPoolAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_saleSupply', internalType: 'uint256', type: 'uint256' },
      { name: '_investmentToken', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CAP_VALIDATION_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'allocation',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'individualCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_investor', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'invest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investmentToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    name: 'investorAmountAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'project',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'refundableAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideCache',
    outputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForCap', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForNextCap', internalType: 'uint256', type: 'uint256' },
      { name: 'largest', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideState',
    outputs: [
      {
        name: '',
        internalType: 'enum RisingTide.RisingTideState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'risingTide_applyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_isValidCap',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalAllocatedUncapped',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validating',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'saleSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_cap', internalType: 'uint256', type: 'uint256' }],
    name: 'setIndividualCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalUncappedAllocations',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'uncappedAllocation',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'paymentTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Refund',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestProjectVoting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testProjectVotingAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_votingPeriod',
        internalType: 'struct ICommon.Period',
        type: 'tuple',
        components: [
          { name: 'start', internalType: 'uint256', type: 'uint256' },
          { name: 'end', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: '_projects', internalType: 'address[]', type: 'address[]' },
      { name: '_numSlots', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'numSlots',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'projectToVotesIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'projectVoteCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_finalBonus',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_initialBonus',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_projects',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_singleSlotDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_voteLimitPerUser',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectVoting_votingPeriod',
    outputs: [
      {
        name: '',
        internalType: 'struct ICommon.Period',
        type: 'tuple',
        components: [
          { name: 'start', internalType: 'uint256', type: 'uint256' },
          { name: 'end', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'projects',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'currentTime', internalType: 'uint256', type: 'uint256' }],
    name: 'test_calculateWeightedVote',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_getWinners',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'votes',
        internalType: 'struct ProjectVoting.SortableVote[]',
        type: 'tuple[]',
        components: [
          { name: 'originalIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'count', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'test_sortVotes',
    outputs: [
      {
        name: '',
        internalType: 'struct ProjectVoting.SortableVote[]',
        type: 'tuple[]',
        components: [
          { name: 'originalIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'count', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectAddress', internalType: 'address', type: 'address' },
    ],
    name: 'test_vote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'userHasVotedForProject',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'userVoteCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'votes',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'votesIndexToProject',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingPeriod',
    outputs: [
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'end', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'weightedProjectVoteCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestRisingTideWithCustomAmounts
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testRisingTideWithCustomAmountsAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '__maxTotalInvestment',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CAP_VALIDATION_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'individualCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    name: 'investorAmountAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideCache',
    outputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForCap', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForNextCap', internalType: 'uint256', type: 'uint256' },
      { name: 'largest', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideState',
    outputs: [
      {
        name: '',
        internalType: 'enum RisingTide.RisingTideState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'risingTide_applyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_isValidCap',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalAllocatedUncapped',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validating',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_cap', internalType: 'uint256', type: 'uint256' }],
    name: 'setCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'i', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'test_invest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestRisingTideWithStaticAmounts
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testRisingTideWithStaticAmountsAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_totalInvestors', internalType: 'uint256', type: 'uint256' },
      { name: '_amountPerInvestor', internalType: 'uint256', type: 'uint256' },
      { name: '__totalAvailable', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CAP_VALIDATION_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'individualCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    name: 'investorAmountAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'investorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideCache',
    outputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForCap', internalType: 'uint256', type: 'uint256' },
      { name: 'sumForNextCap', internalType: 'uint256', type: 'uint256' },
      { name: 'largest', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTideState',
    outputs: [
      {
        name: '',
        internalType: 'enum RisingTide.RisingTideState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'risingTide_applyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_isValidCap',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalAllocatedUncapped',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_totalCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risingTide_validating',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_cap', internalType: 'uint256', type: 'uint256' }],
    name: 'setCap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Vesting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vestingAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_publicSaleVestingMonths',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: '_token', internalType: 'address', type: 'address' },
      { name: '_sales', internalType: 'address[]', type: 'address[]' },
      { name: '_privateSaleCap', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PRIVATE_SALE_MAX_CLIFF_MONTHS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SALE_MANAGER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_sale', internalType: 'address', type: 'address' }],
    name: 'addSale',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'claimable',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'claimablePrivate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'claimablePublic',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'claimed',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'cliffMonths', internalType: 'uint16', type: 'uint16' },
      { name: 'vestingMonths', internalType: 'uint16', type: 'uint16' },
      { name: 'nonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'createPrivateSaleVest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'privateAllocations',
    outputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'claimedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'cliffMonths', internalType: 'uint256', type: 'uint256' },
      { name: 'vestingMonths', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'privateSaleCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'publicSaleCliffMonths',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'publicSaleVestingMonths',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'sales',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_startTime', internalType: 'uint256', type: 'uint256' }],
    name: 'setStartTime',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'totalAllocated',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'totalAllocatedPrivate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'totalAllocatedPublic',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalPrivateSales',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    name: 'usedNonces',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'saleContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AddSale',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ClaimVesting',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Vm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vmAbi = [
  {
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'accesses',
    outputs: [
      { name: 'readSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'writeSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'activeFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'addr',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'allowCheatcodes',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assume',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'char', internalType: 'string', type: 'string' }],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'char', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newChainId', internalType: 'uint256', type: 'uint256' }],
    name: 'chainId',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clearMockedCalls',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'closeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newCoinbase', internalType: 'address', type: 'address' }],
    name: 'coinbase',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'deployer', internalType: 'address', type: 'address' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'computeCreateAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'copyFile',
    outputs: [{ name: 'copied', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'createDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'urlOrAlias', internalType: 'string', type: 'string' }],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'urlOrAlias', internalType: 'string', type: 'string' }],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'walletLabel', internalType: 'string', type: 'string' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'walletLabel', internalType: 'string', type: 'string' },
    ],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'deleteSnapshot',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deleteSnapshots',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newDifficulty', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'difficulty',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pathToStateJson', internalType: 'string', type: 'string' },
    ],
    name: 'dumpState',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address', type: 'address' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256', type: 'int256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string', type: 'string' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'newRuntimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'etch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fromBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'toBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'eth_getLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.EthGetLogs[]',
        type: 'tuple[]',
        components: [
          { name: 'emitter', internalType: 'address', type: 'address' },
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'transactionHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'transactionIndex', internalType: 'uint64', type: 'uint64' },
          { name: 'logIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'removed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'exists',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'gas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'gas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'minGas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCallMinGas',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'minGas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCallMinGas',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
    ],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
      { name: 'emitter', internalType: 'address', type: 'address' },
    ],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'emitter', internalType: 'address', type: 'address' }],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'revertData', internalType: 'bytes4', type: 'bytes4' }],
    name: 'expectRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'revertData', internalType: 'bytes', type: 'bytes' }],
    name: 'expectRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'expectRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint64', type: 'uint64' },
      { name: 'max', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectSafeMemory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint64', type: 'uint64' },
      { name: 'max', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectSafeMemoryCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newBasefee', internalType: 'uint256', type: 'uint256' }],
    name: 'fee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'ffi',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'fsMetadata',
    outputs: [
      {
        name: 'metadata',
        internalType: 'struct VmSafe.FsMetadata',
        type: 'tuple',
        components: [
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'readOnly', internalType: 'bool', type: 'bool' },
          { name: 'modified', internalType: 'uint256', type: 'uint256' },
          { name: 'accessed', internalType: 'uint256', type: 'uint256' },
          { name: 'created', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [{ name: 'height', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getCode',
    outputs: [
      { name: 'creationBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getDeployedCode',
    outputs: [
      { name: 'runtimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getLabel',
    outputs: [{ name: 'currentLabel', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'elementSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingKeyAndParentOf',
    outputs: [
      { name: 'found', internalType: 'bool', type: 'bool' },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'parent', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingLength',
    outputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'idx', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMappingSlotAt',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRecordedLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.Log[]',
        type: 'tuple[]',
        components: [
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'emitter', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isDir',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isFile',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isPersistent',
    outputs: [{ name: 'persistent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newLabel', internalType: 'string', type: 'string' },
    ],
    name: 'label',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'load',
    outputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pathToAllocsJson', internalType: 'string', type: 'string' },
    ],
    name: 'loadAllocs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account0', internalType: 'address', type: 'address' },
      { name: 'account1', internalType: 'address', type: 'address' },
    ],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account0', internalType: 'address', type: 'address' },
      { name: 'account1', internalType: 'address', type: 'address' },
      { name: 'account2', internalType: 'address', type: 'address' },
    ],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCallRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCallRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseAddress',
    outputs: [
      { name: 'parsedValue', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBool',
    outputs: [{ name: 'parsedValue', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes',
    outputs: [{ name: 'parsedValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes32',
    outputs: [
      { name: 'parsedValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseInt',
    outputs: [{ name: 'parsedValue', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseUint',
    outputs: [
      { name: 'parsedValue', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pauseGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    name: 'prank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'msgSender', internalType: 'address', type: 'address' }],
    name: 'prank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newPrevrandao', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'prevrandao',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectRoot',
    outputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'readCallers',
    outputs: [
      {
        name: 'callerMode',
        internalType: 'enum VmSafe.CallerMode',
        type: 'uint8',
      },
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
      { name: 'followLinks', internalType: 'bool', type: 'bool' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFile',
    outputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFileBinary',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readLine',
    outputs: [{ name: 'line', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'linkPath', internalType: 'string', type: 'string' }],
    name: 'readLink',
    outputs: [{ name: 'targetPath', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'record',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'recordLogs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'rememberKey',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'removeDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'removeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'resetNonce',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resumeGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'revertTo',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'revertToAndDelete',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'revokePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'revokePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newHeight', internalType: 'uint256', type: 'uint256' }],
    name: 'roll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'txHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'method', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'string', type: 'string' },
    ],
    name: 'rpc',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'rpcAlias', internalType: 'string', type: 'string' }],
    name: 'rpcUrl',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrlStructs',
    outputs: [
      {
        name: 'urls',
        internalType: 'struct VmSafe.Rpc[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrls',
    outputs: [
      { name: 'urls', internalType: 'string[2][]', type: 'string[2][]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    name: 'selectFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeJson',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setEnv',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newNonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setNonce',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newNonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setNonceUnsafe',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signP256',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'skipTest', internalType: 'bool', type: 'bool' }],
    name: 'skip',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    name: 'sleep',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'snapshot',
    outputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'msgSender', internalType: 'address', type: 'address' }],
    name: 'startPrank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    name: 'startPrank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startStateDiffRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopAndReturnStateDiff',
    outputs: [
      {
        name: 'accountAccesses',
        internalType: 'struct VmSafe.AccountAccess[]',
        type: 'tuple[]',
        components: [
          {
            name: 'chainInfo',
            internalType: 'struct VmSafe.ChainInfo',
            type: 'tuple',
            components: [
              { name: 'forkId', internalType: 'uint256', type: 'uint256' },
              { name: 'chainId', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'kind',
            internalType: 'enum VmSafe.AccountAccessKind',
            type: 'uint8',
          },
          { name: 'account', internalType: 'address', type: 'address' },
          { name: 'accessor', internalType: 'address', type: 'address' },
          { name: 'initialized', internalType: 'bool', type: 'bool' },
          { name: 'oldBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'deployedCode', internalType: 'bytes', type: 'bytes' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'reverted', internalType: 'bool', type: 'bool' },
          {
            name: 'storageAccesses',
            internalType: 'struct VmSafe.StorageAccess[]',
            type: 'tuple[]',
            components: [
              { name: 'account', internalType: 'address', type: 'address' },
              { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
              { name: 'isWrite', internalType: 'bool', type: 'bool' },
              {
                name: 'previousValue',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'newValue', internalType: 'bytes32', type: 'bytes32' },
              { name: 'reverted', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopPrank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'store',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'transact',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'txHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'transact',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'tryFfi',
    outputs: [
      {
        name: 'result',
        internalType: 'struct VmSafe.FfiResult',
        type: 'tuple',
        components: [
          { name: 'exitCode', internalType: 'int32', type: 'int32' },
          { name: 'stdout', internalType: 'bytes', type: 'bytes' },
          { name: 'stderr', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newGasPrice', internalType: 'uint256', type: 'uint256' }],
    name: 'txGasPrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unixTime',
    outputs: [
      { name: 'milliseconds', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'warp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'writeFileBinary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeLine',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VmSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vmSafeAbi = [
  {
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'accesses',
    outputs: [
      { name: 'readSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'writeSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'addr',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assume',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'char', internalType: 'string', type: 'string' }],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'char', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'closeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'deployer', internalType: 'address', type: 'address' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'computeCreateAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'copyFile',
    outputs: [{ name: 'copied', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'createDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'walletLabel', internalType: 'string', type: 'string' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'walletLabel', internalType: 'string', type: 'string' },
    ],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address', type: 'address' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256', type: 'int256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string', type: 'string' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fromBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'toBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'eth_getLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.EthGetLogs[]',
        type: 'tuple[]',
        components: [
          { name: 'emitter', internalType: 'address', type: 'address' },
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'transactionHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'transactionIndex', internalType: 'uint64', type: 'uint64' },
          { name: 'logIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'removed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'exists',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'ffi',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'fsMetadata',
    outputs: [
      {
        name: 'metadata',
        internalType: 'struct VmSafe.FsMetadata',
        type: 'tuple',
        components: [
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'readOnly', internalType: 'bool', type: 'bool' },
          { name: 'modified', internalType: 'uint256', type: 'uint256' },
          { name: 'accessed', internalType: 'uint256', type: 'uint256' },
          { name: 'created', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [{ name: 'height', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getCode',
    outputs: [
      { name: 'creationBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getDeployedCode',
    outputs: [
      { name: 'runtimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getLabel',
    outputs: [{ name: 'currentLabel', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'elementSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingKeyAndParentOf',
    outputs: [
      { name: 'found', internalType: 'bool', type: 'bool' },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'parent', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingLength',
    outputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'idx', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMappingSlotAt',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRecordedLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.Log[]',
        type: 'tuple[]',
        components: [
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'emitter', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isDir',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isFile',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newLabel', internalType: 'string', type: 'string' },
    ],
    name: 'label',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'load',
    outputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseAddress',
    outputs: [
      { name: 'parsedValue', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBool',
    outputs: [{ name: 'parsedValue', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes',
    outputs: [{ name: 'parsedValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes32',
    outputs: [
      { name: 'parsedValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseInt',
    outputs: [{ name: 'parsedValue', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseUint',
    outputs: [
      { name: 'parsedValue', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pauseGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectRoot',
    outputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
      { name: 'followLinks', internalType: 'bool', type: 'bool' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFile',
    outputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFileBinary',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readLine',
    outputs: [{ name: 'line', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'linkPath', internalType: 'string', type: 'string' }],
    name: 'readLink',
    outputs: [{ name: 'targetPath', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'record',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'recordLogs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'rememberKey',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'removeDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'removeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resumeGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'method', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'string', type: 'string' },
    ],
    name: 'rpc',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'rpcAlias', internalType: 'string', type: 'string' }],
    name: 'rpcUrl',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrlStructs',
    outputs: [
      {
        name: 'urls',
        internalType: 'struct VmSafe.Rpc[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrls',
    outputs: [
      { name: 'urls', internalType: 'string[2][]', type: 'string[2][]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeJson',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setEnv',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signP256',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    name: 'sleep',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startStateDiffRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopAndReturnStateDiff',
    outputs: [
      {
        name: 'accountAccesses',
        internalType: 'struct VmSafe.AccountAccess[]',
        type: 'tuple[]',
        components: [
          {
            name: 'chainInfo',
            internalType: 'struct VmSafe.ChainInfo',
            type: 'tuple',
            components: [
              { name: 'forkId', internalType: 'uint256', type: 'uint256' },
              { name: 'chainId', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'kind',
            internalType: 'enum VmSafe.AccountAccessKind',
            type: 'uint8',
          },
          { name: 'account', internalType: 'address', type: 'address' },
          { name: 'accessor', internalType: 'address', type: 'address' },
          { name: 'initialized', internalType: 'bool', type: 'bool' },
          { name: 'oldBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'deployedCode', internalType: 'bytes', type: 'bytes' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'reverted', internalType: 'bool', type: 'bool' },
          {
            name: 'storageAccesses',
            internalType: 'struct VmSafe.StorageAccess[]',
            type: 'tuple[]',
            components: [
              { name: 'account', internalType: 'address', type: 'address' },
              { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
              { name: 'isWrite', internalType: 'bool', type: 'bool' },
              {
                name: 'previousValue',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'newValue', internalType: 'bytes32', type: 'bytes32' },
              { name: 'reverted', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'tryFfi',
    outputs: [
      {
        name: 'result',
        internalType: 'struct VmSafe.FfiResult',
        type: 'tuple',
        components: [
          { name: 'exitCode', internalType: 'int32', type: 'int32' },
          { name: 'stdout', internalType: 'bytes', type: 'bytes' },
          { name: 'stderr', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unixTime',
    outputs: [
      { name: 'milliseconds', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'writeFileBinary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeLine',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdError
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdErrorAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'arithmeticError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'assertionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'divisionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'encodeStorageError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'enumConversionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'indexOOBError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'memOverflowError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'popError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'zeroVarError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdStorageSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdStorageSafeAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      { name: 'fsig', internalType: 'bytes4', type: 'bytes4', indexed: false },
      {
        name: 'keysHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'slot',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SlotFound',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'slot',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WARNING_UninitedSlot',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useReadAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadAccessControlDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadAccessControlHasRole = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAccessControlSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWriteAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useSimulateAccessControl = /*#__PURE__*/ createUseSimulateContract(
  { abi: accessControlAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWatchAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: accessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__
 */
export const useReadBatch = /*#__PURE__*/ createUseReadContract({
  abi: batchAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"controller"`
 */
export const useReadBatchController = /*#__PURE__*/ createUseReadContract({
  abi: batchAbi,
  functionName: 'controller',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"getCurrentWinners"`
 */
export const useReadBatchGetCurrentWinners =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'getCurrentWinners',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"getProjectStatus"`
 */
export const useReadBatchGetProjectStatus = /*#__PURE__*/ createUseReadContract(
  { abi: batchAbi, functionName: 'getProjectStatus' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"hasVotedForProject"`
 */
export const useReadBatchHasVotedForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'hasVotedForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"inInvestmentPeriod"`
 */
export const useReadBatchInInvestmentPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'inInvestmentPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"investmentEnd"`
 */
export const useReadBatchInvestmentEnd = /*#__PURE__*/ createUseReadContract({
  abi: batchAbi,
  functionName: 'investmentEnd',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"projectToVotesIndex"`
 */
export const useReadBatchProjectToVotesIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'projectToVotesIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"projectVoteCount"`
 */
export const useReadBatchProjectVoteCount = /*#__PURE__*/ createUseReadContract(
  { abi: batchAbi, functionName: 'projectVoteCount' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"projectVoting_finalBonus"`
 */
export const useReadBatchProjectVotingFinalBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'projectVoting_finalBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"projectVoting_initialBonus"`
 */
export const useReadBatchProjectVotingInitialBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'projectVoting_initialBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"projectVoting_projects"`
 */
export const useReadBatchProjectVotingProjects =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'projectVoting_projects',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"projectVoting_singleSlotDuration"`
 */
export const useReadBatchProjectVotingSingleSlotDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'projectVoting_singleSlotDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"projectVoting_voteLimitPerUser"`
 */
export const useReadBatchProjectVotingVoteLimitPerUser =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'projectVoting_voteLimitPerUser',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"projectVoting_votingPeriod"`
 */
export const useReadBatchProjectVotingVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'projectVoting_votingPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"projects"`
 */
export const useReadBatchProjects = /*#__PURE__*/ createUseReadContract({
  abi: batchAbi,
  functionName: 'projects',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"singleSlotDuration"`
 */
export const useReadBatchSingleSlotDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'singleSlotDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"slotCount"`
 */
export const useReadBatchSlotCount = /*#__PURE__*/ createUseReadContract({
  abi: batchAbi,
  functionName: 'slotCount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"userHasVotedForProject"`
 */
export const useReadBatchUserHasVotedForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'userHasVotedForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"userVoteCount"`
 */
export const useReadBatchUserVoteCount = /*#__PURE__*/ createUseReadContract({
  abi: batchAbi,
  functionName: 'userVoteCount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"votes"`
 */
export const useReadBatchVotes = /*#__PURE__*/ createUseReadContract({
  abi: batchAbi,
  functionName: 'votes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"votesIndexToProject"`
 */
export const useReadBatchVotesIndexToProject =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'votesIndexToProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const useReadBatchVotingPeriod = /*#__PURE__*/ createUseReadContract({
  abi: batchAbi,
  functionName: 'votingPeriod',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"weightedProjectVoteCount"`
 */
export const useReadBatchWeightedProjectVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: batchAbi,
    functionName: 'weightedProjectVoteCount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link batchAbi}__
 */
export const useWriteBatch = /*#__PURE__*/ createUseWriteContract({
  abi: batchAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"setVotingPeriod"`
 */
export const useWriteBatchSetVotingPeriod =
  /*#__PURE__*/ createUseWriteContract({
    abi: batchAbi,
    functionName: 'setVotingPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"vote"`
 */
export const useWriteBatchVote = /*#__PURE__*/ createUseWriteContract({
  abi: batchAbi,
  functionName: 'vote',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link batchAbi}__
 */
export const useSimulateBatch = /*#__PURE__*/ createUseSimulateContract({
  abi: batchAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"setVotingPeriod"`
 */
export const useSimulateBatchSetVotingPeriod =
  /*#__PURE__*/ createUseSimulateContract({
    abi: batchAbi,
    functionName: 'setVotingPeriod',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link batchAbi}__ and `functionName` set to `"vote"`
 */
export const useSimulateBatchVote = /*#__PURE__*/ createUseSimulateContract({
  abi: batchAbi,
  functionName: 'vote',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__
 */
export const useReadCitizend = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadCitizendDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"PAUSER_ROLE"`
 */
export const useReadCitizendPauserRole = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
  functionName: 'PAUSER_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadCitizendAllowance = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadCitizendBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadCitizendDecimals = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadCitizendGetRoleAdmin = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadCitizendHasRole = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"lockEnd"`
 */
export const useReadCitizendLockEnd = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
  functionName: 'lockEnd',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"name"`
 */
export const useReadCitizendName = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"paused"`
 */
export const useReadCitizendPaused = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCitizendSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadCitizendSymbol = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadCitizendTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: citizendAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__
 */
export const useWriteCitizend = /*#__PURE__*/ createUseWriteContract({
  abi: citizendAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteCitizendApprove = /*#__PURE__*/ createUseWriteContract({
  abi: citizendAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteCitizendBurn = /*#__PURE__*/ createUseWriteContract({
  abi: citizendAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useWriteCitizendBurnFrom = /*#__PURE__*/ createUseWriteContract({
  abi: citizendAbi,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteCitizendGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: citizendAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"pause"`
 */
export const useWriteCitizendPause = /*#__PURE__*/ createUseWriteContract({
  abi: citizendAbi,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteCitizendRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: citizendAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteCitizendRevokeRole = /*#__PURE__*/ createUseWriteContract({
  abi: citizendAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteCitizendTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: citizendAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteCitizendTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: citizendAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"unpause"`
 */
export const useWriteCitizendUnpause = /*#__PURE__*/ createUseWriteContract({
  abi: citizendAbi,
  functionName: 'unpause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"unpausePublic"`
 */
export const useWriteCitizendUnpausePublic =
  /*#__PURE__*/ createUseWriteContract({
    abi: citizendAbi,
    functionName: 'unpausePublic',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__
 */
export const useSimulateCitizend = /*#__PURE__*/ createUseSimulateContract({
  abi: citizendAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateCitizendApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateCitizendBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: citizendAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useSimulateCitizendBurnFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateCitizendGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"pause"`
 */
export const useSimulateCitizendPause = /*#__PURE__*/ createUseSimulateContract(
  { abi: citizendAbi, functionName: 'pause' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateCitizendRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateCitizendRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateCitizendTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateCitizendTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"unpause"`
 */
export const useSimulateCitizendUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendAbi,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendAbi}__ and `functionName` set to `"unpausePublic"`
 */
export const useSimulateCitizendUnpausePublic =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendAbi,
    functionName: 'unpausePublic',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendAbi}__
 */
export const useWatchCitizendEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: citizendAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchCitizendApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchCitizendPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchCitizendRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchCitizendRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchCitizendRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchCitizendTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchCitizendUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__
 */
export const useReadCitizendConstructorTest =
  /*#__PURE__*/ createUseReadContract({ abi: citizendConstructorTestAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCitizendConstructorTestIsTest =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendConstructorTestAbi,
    functionName: 'IS_TEST',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadCitizendConstructorTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendConstructorTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadCitizendConstructorTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendConstructorTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadCitizendConstructorTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendConstructorTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadCitizendConstructorTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendConstructorTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadCitizendConstructorTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendConstructorTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadCitizendConstructorTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendConstructorTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadCitizendConstructorTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendConstructorTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadCitizendConstructorTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendConstructorTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadCitizendConstructorTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: citizendConstructorTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__
 */
export const useWriteCitizendConstructorTest =
  /*#__PURE__*/ createUseWriteContract({ abi: citizendConstructorTestAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCitizendConstructorTestFailed =
  /*#__PURE__*/ createUseWriteContract({
    abi: citizendConstructorTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"testInitialMint"`
 */
export const useWriteCitizendConstructorTestTestInitialMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: citizendConstructorTestAbi,
    functionName: 'testInitialMint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"testSetsCorrectParameters"`
 */
export const useWriteCitizendConstructorTestTestSetsCorrectParameters =
  /*#__PURE__*/ createUseWriteContract({
    abi: citizendConstructorTestAbi,
    functionName: 'testSetsCorrectParameters',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__
 */
export const useSimulateCitizendConstructorTest =
  /*#__PURE__*/ createUseSimulateContract({ abi: citizendConstructorTestAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCitizendConstructorTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendConstructorTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"testInitialMint"`
 */
export const useSimulateCitizendConstructorTestTestInitialMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendConstructorTestAbi,
    functionName: 'testInitialMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `functionName` set to `"testSetsCorrectParameters"`
 */
export const useSimulateCitizendConstructorTestTestSetsCorrectParameters =
  /*#__PURE__*/ createUseSimulateContract({
    abi: citizendConstructorTestAbi,
    functionName: 'testSetsCorrectParameters',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__
 */
export const useWatchCitizendConstructorTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: citizendConstructorTestAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCitizendConstructorTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCitizendConstructorTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchCitizendConstructorTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCitizendConstructorTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCitizendConstructorTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCitizendConstructorTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCitizendConstructorTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchCitizendConstructorTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCitizendConstructorTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCitizendConstructorTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCitizendConstructorTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCitizendConstructorTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCitizendConstructorTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCitizendConstructorTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCitizendConstructorTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCitizendConstructorTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCitizendConstructorTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link citizendConstructorTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCitizendConstructorTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: citizendConstructorTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__
 */
export const useReadController = /*#__PURE__*/ createUseReadContract({
  abi: controllerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"BATCH_MANAGER_ROLE"`
 */
export const useReadControllerBatchManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'BATCH_MANAGER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadControllerDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"LEGAL_MANAGER_ROLE"`
 */
export const useReadControllerLegalManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'LEGAL_MANAGER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"PROJECT_MANAGER_ROLE"`
 */
export const useReadControllerProjectManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'PROJECT_MANAGER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"canInvestInPeoplesPool"`
 */
export const useReadControllerCanInvestInPeoplesPool =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'canInvestInPeoplesPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"canInvestInStakersPool"`
 */
export const useReadControllerCanInvestInStakersPool =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'canInvestInStakersPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"canVote"`
 */
export const useReadControllerCanVote = /*#__PURE__*/ createUseReadContract({
  abi: controllerAbi,
  functionName: 'canVote',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"getBatchForProject"`
 */
export const useReadControllerGetBatchForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'getBatchForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadControllerGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"hasBatchManagerRole"`
 */
export const useReadControllerHasBatchManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'hasBatchManagerRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"hasLegalManagerRole"`
 */
export const useReadControllerHasLegalManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'hasLegalManagerRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"hasProjectManagerRole"`
 */
export const useReadControllerHasProjectManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'hasProjectManagerRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadControllerHasRole = /*#__PURE__*/ createUseReadContract({
  abi: controllerAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"isProjectInBatch"`
 */
export const useReadControllerIsProjectInBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'isProjectInBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"merkleRoot"`
 */
export const useReadControllerMerkleRoot = /*#__PURE__*/ createUseReadContract({
  abi: controllerAbi,
  functionName: 'merkleRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"projects"`
 */
export const useReadControllerProjects = /*#__PURE__*/ createUseReadContract({
  abi: controllerAbi,
  functionName: 'projects',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"projectsToBatches"`
 */
export const useReadControllerProjectsToBatches =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'projectsToBatches',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"staking"`
 */
export const useReadControllerStaking = /*#__PURE__*/ createUseReadContract({
  abi: controllerAbi,
  functionName: 'staking',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadControllerSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: controllerAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"token"`
 */
export const useReadControllerToken = /*#__PURE__*/ createUseReadContract({
  abi: controllerAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link controllerAbi}__
 */
export const useWriteController = /*#__PURE__*/ createUseWriteContract({
  abi: controllerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"createBatch"`
 */
export const useWriteControllerCreateBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: controllerAbi,
    functionName: 'createBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteControllerGrantRole = /*#__PURE__*/ createUseWriteContract(
  { abi: controllerAbi, functionName: 'grantRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"registerProject"`
 */
export const useWriteControllerRegisterProject =
  /*#__PURE__*/ createUseWriteContract({
    abi: controllerAbi,
    functionName: 'registerProject',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteControllerRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: controllerAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteControllerRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: controllerAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"setBatchVotingPeriod"`
 */
export const useWriteControllerSetBatchVotingPeriod =
  /*#__PURE__*/ createUseWriteContract({
    abi: controllerAbi,
    functionName: 'setBatchVotingPeriod',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link controllerAbi}__
 */
export const useSimulateController = /*#__PURE__*/ createUseSimulateContract({
  abi: controllerAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"createBatch"`
 */
export const useSimulateControllerCreateBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: controllerAbi,
    functionName: 'createBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateControllerGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: controllerAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"registerProject"`
 */
export const useSimulateControllerRegisterProject =
  /*#__PURE__*/ createUseSimulateContract({
    abi: controllerAbi,
    functionName: 'registerProject',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateControllerRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: controllerAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateControllerRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: controllerAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link controllerAbi}__ and `functionName` set to `"setBatchVotingPeriod"`
 */
export const useSimulateControllerSetBatchVotingPeriod =
  /*#__PURE__*/ createUseSimulateContract({
    abi: controllerAbi,
    functionName: 'setBatchVotingPeriod',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link controllerAbi}__
 */
export const useWatchControllerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: controllerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link controllerAbi}__ and `eventName` set to `"BatchCreated"`
 */
export const useWatchControllerBatchCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: controllerAbi,
    eventName: 'BatchCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link controllerAbi}__ and `eventName` set to `"ProjectRegistered"`
 */
export const useWatchControllerProjectRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: controllerAbi,
    eventName: 'ProjectRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link controllerAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchControllerRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: controllerAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link controllerAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchControllerRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: controllerAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link controllerAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchControllerRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: controllerAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSale = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"CAP_VALIDATOR_ROLE"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleCapValidatorRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'CAP_VALIDATOR_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"allocated"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleAllocated = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'allocated',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"allocation"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleAllocation = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'allocation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"end"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleEnd = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'end',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"endRegistration"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleEndRegistration =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'endRegistration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleGetRoleAdmin = /*#__PURE__*/ createUseReadContract(
  {
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'getRoleAdmin',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"hasRole"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleHasRole = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"individualCap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"investorAmountAt"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"investorCount"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"maxContribution"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleMaxContribution =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'maxContribution',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"maxTarget"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleMaxTarget = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'maxTarget',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"merkleRoot"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleMerkleRoot = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'merkleRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"minContribution"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleMinContribution =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'minContribution',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"minTarget"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleMinTarget = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'minTarget',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"paymentToken"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSalePaymentToken = /*#__PURE__*/ createUseReadContract(
  {
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'paymentToken',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"paymentTokenToToken"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSalePaymentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'paymentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"rate"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleRate = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'rate',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"refundAmount"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleRefundAmount = /*#__PURE__*/ createUseReadContract(
  {
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'refundAmount',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"risingTideCache"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"risingTideState"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"risingTide_applyCap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"risingTide_totalCap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"risingTide_validating"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"start"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleStart = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'start',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"startRegistration"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleStartRegistration =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'startRegistration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"token"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleToken = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"tokenToPaymentToken"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleTokenToPaymentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'tokenToPaymentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"totalTokensForSale"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleTotalTokensForSale =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'totalTokensForSale',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"totalUncappedAllocations"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleTotalUncappedAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'totalUncappedAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"uncappedAllocation"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"withdrawn"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useReadCtzndSaleWithdrawn = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'withdrawn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSale = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"buy"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleBuy = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'buy',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"refund"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleRefund = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleRevokeRole = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndSaleAbi, address: ctzndSaleAddress, functionName: 'revokeRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"risingTide_validate"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setEnd"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleSetEnd = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'setEnd',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setIndividualCap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setMaxTarget"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleSetMaxTarget =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setMaxTarget',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setMerkleRoot"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleSetMerkleRoot =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setMerkleRoot',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setMinContribution"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleSetMinContribution =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setMinContribution',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setMinTarget"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleSetMinTarget =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setMinTarget',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setStart"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleSetStart = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'setStart',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setToken"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleSetToken = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'setToken',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWriteCtzndSaleWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSale = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"buy"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleBuy = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'buy',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"refund"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"risingTide_validate"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setEnd"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleSetEnd =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setEnd',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setIndividualCap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setMaxTarget"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleSetMaxTarget =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setMaxTarget',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setMerkleRoot"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleSetMerkleRoot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setMerkleRoot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setMinContribution"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleSetMinContribution =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setMinContribution',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setMinTarget"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleSetMinTarget =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setMinTarget',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setStart"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleSetStart =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setStart',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setToken"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleSetToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useSimulateCtzndSaleWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWatchCtzndSaleEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: ctzndSaleAbi, address: ctzndSaleAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleAbi}__ and `eventName` set to `"Claim"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWatchCtzndSaleClaimEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    eventName: 'Claim',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleAbi}__ and `eventName` set to `"Purchase"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWatchCtzndSalePurchaseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    eventName: 'Purchase',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleAbi}__ and `eventName` set to `"Refund"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWatchCtzndSaleRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWatchCtzndSaleRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleAbi}__ and `eventName` set to `"RoleGranted"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWatchCtzndSaleRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWatchCtzndSaleRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleAbi}__ and `eventName` set to `"Withdraw"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1)
 */
export const useWatchCtzndSaleWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dsTestAbi}__
 */
export const useReadDsTest = /*#__PURE__*/ createUseReadContract({
  abi: dsTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dsTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadDsTestIsTest = /*#__PURE__*/ createUseReadContract({
  abi: dsTestAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dsTestAbi}__
 */
export const useWriteDsTest = /*#__PURE__*/ createUseWriteContract({
  abi: dsTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dsTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteDsTestFailed = /*#__PURE__*/ createUseWriteContract({
  abi: dsTestAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dsTestAbi}__
 */
export const useSimulateDsTest = /*#__PURE__*/ createUseSimulateContract({
  abi: dsTestAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dsTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateDsTestFailed = /*#__PURE__*/ createUseSimulateContract({
  abi: dsTestAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__
 */
export const useWatchDsTestEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: dsTestAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchDsTestLogEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: dsTestAbi, eventName: 'log' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchDsTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchDsTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchDsTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchDsTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchDsTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchDsTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchDsTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchDsTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchDsTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchDsTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchDsTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchDsTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchDsTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchDsTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchDsTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dsTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deployScriptAbi}__
 */
export const useReadDeployScript = /*#__PURE__*/ createUseReadContract({
  abi: deployScriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deployScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadDeployScriptIsScript = /*#__PURE__*/ createUseReadContract({
  abi: deployScriptAbi,
  functionName: 'IS_SCRIPT',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deployScriptAbi}__
 */
export const useWriteDeployScript = /*#__PURE__*/ createUseWriteContract({
  abi: deployScriptAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteDeployScriptRun = /*#__PURE__*/ createUseWriteContract({
  abi: deployScriptAbi,
  functionName: 'run',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deployScriptAbi}__
 */
export const useSimulateDeployScript = /*#__PURE__*/ createUseSimulateContract({
  abi: deployScriptAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateDeployScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deployScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link devDeployScriptAbi}__
 */
export const useReadDevDeployScript = /*#__PURE__*/ createUseReadContract({
  abi: devDeployScriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link devDeployScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadDevDeployScriptIsScript =
  /*#__PURE__*/ createUseReadContract({
    abi: devDeployScriptAbi,
    functionName: 'IS_SCRIPT',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link devDeployScriptAbi}__
 */
export const useWriteDevDeployScript = /*#__PURE__*/ createUseWriteContract({
  abi: devDeployScriptAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link devDeployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteDevDeployScriptRun = /*#__PURE__*/ createUseWriteContract({
  abi: devDeployScriptAbi,
  functionName: 'run',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link devDeployScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteDevDeployScriptSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: devDeployScriptAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link devDeployScriptAbi}__
 */
export const useSimulateDevDeployScript =
  /*#__PURE__*/ createUseSimulateContract({ abi: devDeployScriptAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link devDeployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateDevDeployScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: devDeployScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link devDeployScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateDevDeployScriptSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: devDeployScriptAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /*#__PURE__*/ createUseReadContract({
  abi: erc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const useReadErc20Burnable = /*#__PURE__*/ createUseReadContract({
  abi: erc20BurnableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20BurnableAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20BurnableAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BurnableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20BurnableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20BurnableDecimals = /*#__PURE__*/ createUseReadContract(
  { abi: erc20BurnableAbi, functionName: 'decimals' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc20BurnableName = /*#__PURE__*/ createUseReadContract({
  abi: erc20BurnableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20BurnableSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20BurnableAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20BurnableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20BurnableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const useWriteErc20Burnable = /*#__PURE__*/ createUseWriteContract({
  abi: erc20BurnableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20BurnableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20BurnableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteErc20BurnableBurn = /*#__PURE__*/ createUseWriteContract({
  abi: erc20BurnableAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useWriteErc20BurnableBurnFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20BurnableAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20BurnableTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20BurnableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20BurnableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20BurnableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const useSimulateErc20Burnable = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20BurnableAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20BurnableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateErc20BurnableBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useSimulateErc20BurnableBurnFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20BurnableTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20BurnableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20BurnableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20BurnableAbi}__
 */
export const useWatchErc20BurnableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc20BurnableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20BurnableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20BurnableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20BurnableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20BurnableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20BurnableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20BurnableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PausableAbi}__
 */
export const useReadErc20Pausable = /*#__PURE__*/ createUseReadContract({
  abi: erc20PausableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20PausableAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PausableAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20PausableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PausableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20PausableDecimals = /*#__PURE__*/ createUseReadContract(
  { abi: erc20PausableAbi, functionName: 'decimals' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc20PausableName = /*#__PURE__*/ createUseReadContract({
  abi: erc20PausableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"paused"`
 */
export const useReadErc20PausablePaused = /*#__PURE__*/ createUseReadContract({
  abi: erc20PausableAbi,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20PausableSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20PausableAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20PausableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PausableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PausableAbi}__
 */
export const useWriteErc20Pausable = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PausableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20PausableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PausableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20PausableTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PausableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20PausableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PausableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PausableAbi}__
 */
export const useSimulateErc20Pausable = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20PausableAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20PausableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PausableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20PausableTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PausableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PausableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20PausableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PausableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PausableAbi}__
 */
export const useWatchErc20PausableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc20PausableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PausableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20PausableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PausableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PausableAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchErc20PausablePausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PausableAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PausableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20PausableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PausableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PausableAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchErc20PausableUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PausableAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fractalRegistryAbi}__
 */
export const useReadFractalRegistry = /*#__PURE__*/ createUseReadContract({
  abi: fractalRegistryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"delegates"`
 */
export const useReadFractalRegistryDelegates =
  /*#__PURE__*/ createUseReadContract({
    abi: fractalRegistryAbi,
    functionName: 'delegates',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"getFractalId"`
 */
export const useReadFractalRegistryGetFractalId =
  /*#__PURE__*/ createUseReadContract({
    abi: fractalRegistryAbi,
    functionName: 'getFractalId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"isUserInList"`
 */
export const useReadFractalRegistryIsUserInList =
  /*#__PURE__*/ createUseReadContract({
    abi: fractalRegistryAbi,
    functionName: 'isUserInList',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fractalRegistryAbi}__
 */
export const useWriteFractalRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: fractalRegistryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"addDelegate"`
 */
export const useWriteFractalRegistryAddDelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: fractalRegistryAbi,
    functionName: 'addDelegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"addUserAddress"`
 */
export const useWriteFractalRegistryAddUserAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: fractalRegistryAbi,
    functionName: 'addUserAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"addUserToList"`
 */
export const useWriteFractalRegistryAddUserToList =
  /*#__PURE__*/ createUseWriteContract({
    abi: fractalRegistryAbi,
    functionName: 'addUserToList',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"removeDelegate"`
 */
export const useWriteFractalRegistryRemoveDelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: fractalRegistryAbi,
    functionName: 'removeDelegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"removeUserAddress"`
 */
export const useWriteFractalRegistryRemoveUserAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: fractalRegistryAbi,
    functionName: 'removeUserAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"removeUserFromList"`
 */
export const useWriteFractalRegistryRemoveUserFromList =
  /*#__PURE__*/ createUseWriteContract({
    abi: fractalRegistryAbi,
    functionName: 'removeUserFromList',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fractalRegistryAbi}__
 */
export const useSimulateFractalRegistry =
  /*#__PURE__*/ createUseSimulateContract({ abi: fractalRegistryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"addDelegate"`
 */
export const useSimulateFractalRegistryAddDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fractalRegistryAbi,
    functionName: 'addDelegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"addUserAddress"`
 */
export const useSimulateFractalRegistryAddUserAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fractalRegistryAbi,
    functionName: 'addUserAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"addUserToList"`
 */
export const useSimulateFractalRegistryAddUserToList =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fractalRegistryAbi,
    functionName: 'addUserToList',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"removeDelegate"`
 */
export const useSimulateFractalRegistryRemoveDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fractalRegistryAbi,
    functionName: 'removeDelegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"removeUserAddress"`
 */
export const useSimulateFractalRegistryRemoveUserAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fractalRegistryAbi,
    functionName: 'removeUserAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fractalRegistryAbi}__ and `functionName` set to `"removeUserFromList"`
 */
export const useSimulateFractalRegistryRemoveUserFromList =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fractalRegistryAbi,
    functionName: 'removeUserFromList',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useReadIAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadIAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: iAccessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadIAccessControlHasRole = /*#__PURE__*/ createUseReadContract(
  { abi: iAccessControlAbi, functionName: 'hasRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWriteIAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteIAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteIAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteIAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useSimulateIAccessControl =
  /*#__PURE__*/ createUseSimulateContract({ abi: iAccessControlAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateIAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateIAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateIAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWatchIAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iAccessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchIAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchIAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchIAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iBatchAbi}__
 */
export const useWriteIBatch = /*#__PURE__*/ createUseWriteContract({
  abi: iBatchAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iBatchAbi}__ and `functionName` set to `"vote"`
 */
export const useWriteIBatchVote = /*#__PURE__*/ createUseWriteContract({
  abi: iBatchAbi,
  functionName: 'vote',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iBatchAbi}__
 */
export const useSimulateIBatch = /*#__PURE__*/ createUseSimulateContract({
  abi: iBatchAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iBatchAbi}__ and `functionName` set to `"vote"`
 */
export const useSimulateIBatchVote = /*#__PURE__*/ createUseSimulateContract({
  abi: iBatchAbi,
  functionName: 'vote',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iControllerAbi}__
 */
export const useReadIController = /*#__PURE__*/ createUseReadContract({
  abi: iControllerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"canInvestInPeoplesPool"`
 */
export const useReadIControllerCanInvestInPeoplesPool =
  /*#__PURE__*/ createUseReadContract({
    abi: iControllerAbi,
    functionName: 'canInvestInPeoplesPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"canInvestInStakersPool"`
 */
export const useReadIControllerCanInvestInStakersPool =
  /*#__PURE__*/ createUseReadContract({
    abi: iControllerAbi,
    functionName: 'canInvestInStakersPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"canVote"`
 */
export const useReadIControllerCanVote = /*#__PURE__*/ createUseReadContract({
  abi: iControllerAbi,
  functionName: 'canVote',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"getBatchForProject"`
 */
export const useReadIControllerGetBatchForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: iControllerAbi,
    functionName: 'getBatchForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"hasLegalManagerRole"`
 */
export const useReadIControllerHasLegalManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: iControllerAbi,
    functionName: 'hasLegalManagerRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"hasProjectManagerRole"`
 */
export const useReadIControllerHasProjectManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: iControllerAbi,
    functionName: 'hasProjectManagerRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iControllerAbi}__
 */
export const useWriteIController = /*#__PURE__*/ createUseWriteContract({
  abi: iControllerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"createBatch"`
 */
export const useWriteIControllerCreateBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: iControllerAbi,
    functionName: 'createBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"isProjectInBatch"`
 */
export const useWriteIControllerIsProjectInBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: iControllerAbi,
    functionName: 'isProjectInBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"registerProject"`
 */
export const useWriteIControllerRegisterProject =
  /*#__PURE__*/ createUseWriteContract({
    abi: iControllerAbi,
    functionName: 'registerProject',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"setBatchVotingPeriod"`
 */
export const useWriteIControllerSetBatchVotingPeriod =
  /*#__PURE__*/ createUseWriteContract({
    abi: iControllerAbi,
    functionName: 'setBatchVotingPeriod',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iControllerAbi}__
 */
export const useSimulateIController = /*#__PURE__*/ createUseSimulateContract({
  abi: iControllerAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"createBatch"`
 */
export const useSimulateIControllerCreateBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iControllerAbi,
    functionName: 'createBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"isProjectInBatch"`
 */
export const useSimulateIControllerIsProjectInBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iControllerAbi,
    functionName: 'isProjectInBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"registerProject"`
 */
export const useSimulateIControllerRegisterProject =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iControllerAbi,
    functionName: 'registerProject',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iControllerAbi}__ and `functionName` set to `"setBatchVotingPeriod"`
 */
export const useSimulateIControllerSetBatchVotingPeriod =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iControllerAbi,
    functionName: 'setBatchVotingPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const useReadIerc165 = /*#__PURE__*/ createUseReadContract({
  abi: ierc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useReadIerc20 = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWriteIerc20 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useSimulateIerc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: ierc20Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWatchIerc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useReadIerc20Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20MetadataSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20MetadataTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWriteIerc20Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useSimulateIerc20Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWatchIerc20MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useReadIerc20Permit = /*#__PURE__*/ createUseReadContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadIerc20PermitDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20PermitAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadIerc20PermitNonces = /*#__PURE__*/ createUseReadContract({
  abi: ierc20PermitAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useWriteIerc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteIerc20PermitPermit = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useSimulateIerc20Permit = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateIerc20PermitPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20PermitAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721TokenReceiverAbi}__
 */
export const useWriteIerc721TokenReceiver =
  /*#__PURE__*/ createUseWriteContract({ abi: ierc721TokenReceiverAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721TokenReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteIerc721TokenReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721TokenReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721TokenReceiverAbi}__
 */
export const useSimulateIerc721TokenReceiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721TokenReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721TokenReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateIerc721TokenReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721TokenReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getBasefee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getChainId' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3 = /*#__PURE__*/ createUseSimulateContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const useReadIPool = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadIPoolAllocation = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'allocation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"refundableAmount"`
 */
export const useReadIPoolRefundableAmount = /*#__PURE__*/ createUseReadContract(
  { abi: iPoolAbi, functionName: 'refundableAmount' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadIPoolUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: iPoolAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const useWriteIPool = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteIPoolInvest = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteIPoolRefund = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWriteIPoolSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const useSimulateIPool = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateIPoolInvest = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateIPoolRefund = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulateIPoolSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProjectAbi}__
 */
export const useReadIProject = /*#__PURE__*/ createUseReadContract({
  abi: iProjectAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"approvedByLegal"`
 */
export const useReadIProjectApprovedByLegal =
  /*#__PURE__*/ createUseReadContract({
    abi: iProjectAbi,
    functionName: 'approvedByLegal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"approvedByManager"`
 */
export const useReadIProjectApprovedByManager =
  /*#__PURE__*/ createUseReadContract({
    abi: iProjectAbi,
    functionName: 'approvedByManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"hasTokens"`
 */
export const useReadIProjectHasTokens = /*#__PURE__*/ createUseReadContract({
  abi: iProjectAbi,
  functionName: 'hasTokens',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"investmentTokenToToken"`
 */
export const useReadIProjectInvestmentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: iProjectAbi,
    functionName: 'investmentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"isReadyForListing"`
 */
export const useReadIProjectIsReadyForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: iProjectAbi,
    functionName: 'isReadyForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"peoplesPool"`
 */
export const useReadIProjectPeoplesPool = /*#__PURE__*/ createUseReadContract({
  abi: iProjectAbi,
  functionName: 'peoplesPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"stakersPool"`
 */
export const useReadIProjectStakersPool = /*#__PURE__*/ createUseReadContract({
  abi: iProjectAbi,
  functionName: 'stakersPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"tokenToInvestmentToken"`
 */
export const useReadIProjectTokenToInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: iProjectAbi,
    functionName: 'tokenToInvestmentToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iProjectAbi}__
 */
export const useWriteIProject = /*#__PURE__*/ createUseWriteContract({
  abi: iProjectAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"approveByLegal"`
 */
export const useWriteIProjectApproveByLegal =
  /*#__PURE__*/ createUseWriteContract({
    abi: iProjectAbi,
    functionName: 'approveByLegal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"approveByManager"`
 */
export const useWriteIProjectApproveByManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: iProjectAbi,
    functionName: 'approveByManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteIProjectInvest = /*#__PURE__*/ createUseWriteContract({
  abi: iProjectAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iProjectAbi}__
 */
export const useSimulateIProject = /*#__PURE__*/ createUseSimulateContract({
  abi: iProjectAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"approveByLegal"`
 */
export const useSimulateIProjectApproveByLegal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iProjectAbi,
    functionName: 'approveByLegal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"approveByManager"`
 */
export const useSimulateIProjectApproveByManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iProjectAbi,
    functionName: 'approveByManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iProjectAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateIProjectInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iProjectAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSaleAbi}__
 */
export const useReadISale = /*#__PURE__*/ createUseReadContract({
  abi: iSaleAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadISaleAllocation = /*#__PURE__*/ createUseReadContract({
  abi: iSaleAbi,
  functionName: 'allocation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"paymentToken"`
 */
export const useReadISalePaymentToken = /*#__PURE__*/ createUseReadContract({
  abi: iSaleAbi,
  functionName: 'paymentToken',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"paymentTokenToToken"`
 */
export const useReadISalePaymentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: iSaleAbi,
    functionName: 'paymentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"refundAmount"`
 */
export const useReadISaleRefundAmount = /*#__PURE__*/ createUseReadContract({
  abi: iSaleAbi,
  functionName: 'refundAmount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"token"`
 */
export const useReadISaleToken = /*#__PURE__*/ createUseReadContract({
  abi: iSaleAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"tokenToPaymentToken"`
 */
export const useReadISaleTokenToPaymentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: iSaleAbi,
    functionName: 'tokenToPaymentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadISaleUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: iSaleAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSaleAbi}__
 */
export const useWriteISale = /*#__PURE__*/ createUseWriteContract({
  abi: iSaleAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"buy"`
 */
export const useWriteISaleBuy = /*#__PURE__*/ createUseWriteContract({
  abi: iSaleAbi,
  functionName: 'buy',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteISaleRefund = /*#__PURE__*/ createUseWriteContract({
  abi: iSaleAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWriteISaleSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSaleAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteISaleWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: iSaleAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSaleAbi}__
 */
export const useSimulateISale = /*#__PURE__*/ createUseSimulateContract({
  abi: iSaleAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"buy"`
 */
export const useSimulateISaleBuy = /*#__PURE__*/ createUseSimulateContract({
  abi: iSaleAbi,
  functionName: 'buy',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateISaleRefund = /*#__PURE__*/ createUseSimulateContract({
  abi: iSaleAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulateISaleSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSaleAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSaleAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateISaleWithdraw = /*#__PURE__*/ createUseSimulateContract(
  { abi: iSaleAbi, functionName: 'withdraw' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStakingAbi}__
 */
export const useReadIStaking = /*#__PURE__*/ createUseReadContract({
  abi: iStakingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStakingAbi}__ and `functionName` set to `"hasStaked"`
 */
export const useReadIStakingHasStaked = /*#__PURE__*/ createUseReadContract({
  abi: iStakingAbi,
  functionName: 'hasStaked',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStakingAbi}__ and `functionName` set to `"withdrawable"`
 */
export const useReadIStakingWithdrawable = /*#__PURE__*/ createUseReadContract({
  abi: iStakingAbi,
  functionName: 'withdrawable',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStakingAbi}__
 */
export const useWriteIStaking = /*#__PURE__*/ createUseWriteContract({
  abi: iStakingAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStakingAbi}__ and `functionName` set to `"rebond"`
 */
export const useWriteIStakingRebond = /*#__PURE__*/ createUseWriteContract({
  abi: iStakingAbi,
  functionName: 'rebond',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStakingAbi}__ and `functionName` set to `"stake"`
 */
export const useWriteIStakingStake = /*#__PURE__*/ createUseWriteContract({
  abi: iStakingAbi,
  functionName: 'stake',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStakingAbi}__ and `functionName` set to `"unbond"`
 */
export const useWriteIStakingUnbond = /*#__PURE__*/ createUseWriteContract({
  abi: iStakingAbi,
  functionName: 'unbond',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStakingAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteIStakingWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: iStakingAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStakingAbi}__
 */
export const useSimulateIStaking = /*#__PURE__*/ createUseSimulateContract({
  abi: iStakingAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStakingAbi}__ and `functionName` set to `"rebond"`
 */
export const useSimulateIStakingRebond =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iStakingAbi,
    functionName: 'rebond',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStakingAbi}__ and `functionName` set to `"stake"`
 */
export const useSimulateIStakingStake = /*#__PURE__*/ createUseSimulateContract(
  { abi: iStakingAbi, functionName: 'stake' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStakingAbi}__ and `functionName` set to `"unbond"`
 */
export const useSimulateIStakingUnbond =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iStakingAbi,
    functionName: 'unbond',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStakingAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateIStakingWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iStakingAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVestingAbi}__
 */
export const useReadIVesting = /*#__PURE__*/ createUseReadContract({
  abi: iVestingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"claimable"`
 */
export const useReadIVestingClaimable = /*#__PURE__*/ createUseReadContract({
  abi: iVestingAbi,
  functionName: 'claimable',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"claimed"`
 */
export const useReadIVestingClaimed = /*#__PURE__*/ createUseReadContract({
  abi: iVestingAbi,
  functionName: 'claimed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"privateSaleCap"`
 */
export const useReadIVestingPrivateSaleCap =
  /*#__PURE__*/ createUseReadContract({
    abi: iVestingAbi,
    functionName: 'privateSaleCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"publicSaleCliffMonths"`
 */
export const useReadIVestingPublicSaleCliffMonths =
  /*#__PURE__*/ createUseReadContract({
    abi: iVestingAbi,
    functionName: 'publicSaleCliffMonths',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"publicSaleVestingMonths"`
 */
export const useReadIVestingPublicSaleVestingMonths =
  /*#__PURE__*/ createUseReadContract({
    abi: iVestingAbi,
    functionName: 'publicSaleVestingMonths',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"startTime"`
 */
export const useReadIVestingStartTime = /*#__PURE__*/ createUseReadContract({
  abi: iVestingAbi,
  functionName: 'startTime',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"token"`
 */
export const useReadIVestingToken = /*#__PURE__*/ createUseReadContract({
  abi: iVestingAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"totalAllocated"`
 */
export const useReadIVestingTotalAllocated =
  /*#__PURE__*/ createUseReadContract({
    abi: iVestingAbi,
    functionName: 'totalAllocated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVestingAbi}__
 */
export const useWriteIVesting = /*#__PURE__*/ createUseWriteContract({
  abi: iVestingAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"claim"`
 */
export const useWriteIVestingClaim = /*#__PURE__*/ createUseWriteContract({
  abi: iVestingAbi,
  functionName: 'claim',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"createPrivateSaleVest"`
 */
export const useWriteIVestingCreatePrivateSaleVest =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVestingAbi,
    functionName: 'createPrivateSaleVest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteIVestingRefund = /*#__PURE__*/ createUseWriteContract({
  abi: iVestingAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVestingAbi}__
 */
export const useSimulateIVesting = /*#__PURE__*/ createUseSimulateContract({
  abi: iVestingAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"claim"`
 */
export const useSimulateIVestingClaim = /*#__PURE__*/ createUseSimulateContract(
  { abi: iVestingAbi, functionName: 'claim' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"createPrivateSaleVest"`
 */
export const useSimulateIVestingCreatePrivateSaleVest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVestingAbi,
    functionName: 'createPrivateSaleVest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateIVestingRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVestingAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__
 */
export const useReadMockErc721 = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadMockErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadMockErc721GetApproved = /*#__PURE__*/ createUseReadContract(
  { abi: mockErc721Abi, functionName: 'getApproved' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadMockErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: mockErc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadMockErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadMockErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadMockErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: mockErc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadMockErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadMockErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__
 */
export const useWriteMockErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: mockErc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteMockErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: mockErc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"initialize"`
 */
export const useWriteMockErc721Initialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockErc721Abi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteMockErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteMockErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteMockErc721TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__
 */
export const useSimulateMockErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: mockErc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateMockErc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateMockErc721Initialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc721Abi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateMockErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateMockErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateMockErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc721Abi}__
 */
export const useWatchMockErc721Event =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: mockErc721Abi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchMockErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockErc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchMockErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockErc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchMockErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockErc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__
 */
export const useReadMockProject = /*#__PURE__*/ createUseReadContract({
  abi: mockProjectAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"approveByLegal"`
 */
export const useReadMockProjectApproveByLegal =
  /*#__PURE__*/ createUseReadContract({
    abi: mockProjectAbi,
    functionName: 'approveByLegal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"approveByManager"`
 */
export const useReadMockProjectApproveByManager =
  /*#__PURE__*/ createUseReadContract({
    abi: mockProjectAbi,
    functionName: 'approveByManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"approvedByLegal"`
 */
export const useReadMockProjectApprovedByLegal =
  /*#__PURE__*/ createUseReadContract({
    abi: mockProjectAbi,
    functionName: 'approvedByLegal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"approvedByManager"`
 */
export const useReadMockProjectApprovedByManager =
  /*#__PURE__*/ createUseReadContract({
    abi: mockProjectAbi,
    functionName: 'approvedByManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"hasTokens"`
 */
export const useReadMockProjectHasTokens = /*#__PURE__*/ createUseReadContract({
  abi: mockProjectAbi,
  functionName: 'hasTokens',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"investmentTokenToToken"`
 */
export const useReadMockProjectInvestmentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: mockProjectAbi,
    functionName: 'investmentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"isReadyForListing"`
 */
export const useReadMockProjectIsReadyForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: mockProjectAbi,
    functionName: 'isReadyForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"merkleRoot"`
 */
export const useReadMockProjectMerkleRoot = /*#__PURE__*/ createUseReadContract(
  { abi: mockProjectAbi, functionName: 'merkleRoot' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"peoplesPool"`
 */
export const useReadMockProjectPeoplesPool =
  /*#__PURE__*/ createUseReadContract({
    abi: mockProjectAbi,
    functionName: 'peoplesPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"stakersPool"`
 */
export const useReadMockProjectStakersPool =
  /*#__PURE__*/ createUseReadContract({
    abi: mockProjectAbi,
    functionName: 'stakersPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"tokenToInvestmentToken"`
 */
export const useReadMockProjectTokenToInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: mockProjectAbi,
    functionName: 'tokenToInvestmentToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockProjectAbi}__
 */
export const useWriteMockProject = /*#__PURE__*/ createUseWriteContract({
  abi: mockProjectAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteMockProjectInvest = /*#__PURE__*/ createUseWriteContract({
  abi: mockProjectAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"test_createPeoplesPool"`
 */
export const useWriteMockProjectTestCreatePeoplesPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockProjectAbi,
    functionName: 'test_createPeoplesPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"test_createStakersPool"`
 */
export const useWriteMockProjectTestCreateStakersPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockProjectAbi,
    functionName: 'test_createStakersPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockProjectAbi}__
 */
export const useSimulateMockProject = /*#__PURE__*/ createUseSimulateContract({
  abi: mockProjectAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateMockProjectInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockProjectAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"test_createPeoplesPool"`
 */
export const useSimulateMockProjectTestCreatePeoplesPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockProjectAbi,
    functionName: 'test_createPeoplesPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockProjectAbi}__ and `functionName` set to `"test_createStakersPool"`
 */
export const useSimulateMockProjectTestCreateStakersPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockProjectAbi,
    functionName: 'test_createStakersPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__
 */
export const useReadMockSale = /*#__PURE__*/ createUseReadContract({
  abi: mockSaleAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadMockSaleAllocation = /*#__PURE__*/ createUseReadContract({
  abi: mockSaleAbi,
  functionName: 'allocation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"buy"`
 */
export const useReadMockSaleBuy = /*#__PURE__*/ createUseReadContract({
  abi: mockSaleAbi,
  functionName: 'buy',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"calls"`
 */
export const useReadMockSaleCalls = /*#__PURE__*/ createUseReadContract({
  abi: mockSaleAbi,
  functionName: 'calls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"paymentToken"`
 */
export const useReadMockSalePaymentToken = /*#__PURE__*/ createUseReadContract({
  abi: mockSaleAbi,
  functionName: 'paymentToken',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"paymentTokenToToken"`
 */
export const useReadMockSalePaymentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: mockSaleAbi,
    functionName: 'paymentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"refundAmount"`
 */
export const useReadMockSaleRefundAmount = /*#__PURE__*/ createUseReadContract({
  abi: mockSaleAbi,
  functionName: 'refundAmount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useReadMockSaleSetIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: mockSaleAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadMockSaleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: mockSaleAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"test_Called"`
 */
export const useReadMockSaleTestCalled = /*#__PURE__*/ createUseReadContract({
  abi: mockSaleAbi,
  functionName: 'test_Called',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"token"`
 */
export const useReadMockSaleToken = /*#__PURE__*/ createUseReadContract({
  abi: mockSaleAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"tokenToPaymentToken"`
 */
export const useReadMockSaleTokenToPaymentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: mockSaleAbi,
    functionName: 'tokenToPaymentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadMockSaleUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: mockSaleAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"withdraw"`
 */
export const useReadMockSaleWithdraw = /*#__PURE__*/ createUseReadContract({
  abi: mockSaleAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockSaleAbi}__
 */
export const useWriteMockSale = /*#__PURE__*/ createUseWriteContract({
  abi: mockSaleAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteMockSaleRefund = /*#__PURE__*/ createUseWriteContract({
  abi: mockSaleAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"test_addAllocation"`
 */
export const useWriteMockSaleTestAddAllocation =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockSaleAbi,
    functionName: 'test_addAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"test_addRefund"`
 */
export const useWriteMockSaleTestAddRefund =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockSaleAbi,
    functionName: 'test_addRefund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockSaleAbi}__
 */
export const useSimulateMockSale = /*#__PURE__*/ createUseSimulateContract({
  abi: mockSaleAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateMockSaleRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockSaleAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"test_addAllocation"`
 */
export const useSimulateMockSaleTestAddAllocation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockSaleAbi,
    functionName: 'test_addAllocation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockSaleAbi}__ and `functionName` set to `"test_addRefund"`
 */
export const useSimulateMockSaleTestAddRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockSaleAbi,
    functionName: 'test_addRefund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pausableAbi}__
 */
export const useReadPausable = /*#__PURE__*/ createUseReadContract({
  abi: pausableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pausableAbi}__ and `functionName` set to `"paused"`
 */
export const useReadPausablePaused = /*#__PURE__*/ createUseReadContract({
  abi: pausableAbi,
  functionName: 'paused',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pausableAbi}__
 */
export const useWatchPausableEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: pausableAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pausableAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchPausablePausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pausableAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pausableAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchPausableUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pausableAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__
 */
export const useReadPeoplesPool = /*#__PURE__*/ createUseReadContract({
  abi: peoplesPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadPeoplesPoolCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadPeoplesPoolAllocation = /*#__PURE__*/ createUseReadContract(
  { abi: peoplesPoolAbi, functionName: 'allocation' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadPeoplesPoolIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"investmentToken"`
 */
export const useReadPeoplesPoolInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'investmentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadPeoplesPoolInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadPeoplesPoolInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"project"`
 */
export const useReadPeoplesPoolProject = /*#__PURE__*/ createUseReadContract({
  abi: peoplesPoolAbi,
  functionName: 'project',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"refundableAmount"`
 */
export const useReadPeoplesPoolRefundableAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'refundableAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadPeoplesPoolRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadPeoplesPoolRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadPeoplesPoolRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadPeoplesPoolRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadPeoplesPoolRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadPeoplesPoolRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadPeoplesPoolRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"saleSupply"`
 */
export const useReadPeoplesPoolSaleSupply = /*#__PURE__*/ createUseReadContract(
  { abi: peoplesPoolAbi, functionName: 'saleSupply' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"totalUncappedAllocations"`
 */
export const useReadPeoplesPoolTotalUncappedAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'totalUncappedAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadPeoplesPoolUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: peoplesPoolAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link peoplesPoolAbi}__
 */
export const useWritePeoplesPool = /*#__PURE__*/ createUseWriteContract({
  abi: peoplesPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useWritePeoplesPoolInvest = /*#__PURE__*/ createUseWriteContract({
  abi: peoplesPoolAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useWritePeoplesPoolRefund = /*#__PURE__*/ createUseWriteContract({
  abi: peoplesPoolAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWritePeoplesPoolRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: peoplesPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWritePeoplesPoolSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: peoplesPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link peoplesPoolAbi}__
 */
export const useSimulatePeoplesPool = /*#__PURE__*/ createUseSimulateContract({
  abi: peoplesPoolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulatePeoplesPoolInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: peoplesPoolAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulatePeoplesPoolRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: peoplesPoolAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulatePeoplesPoolRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: peoplesPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link peoplesPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulatePeoplesPoolSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: peoplesPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link peoplesPoolAbi}__
 */
export const useWatchPeoplesPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: peoplesPoolAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link peoplesPoolAbi}__ and `eventName` set to `"Refund"`
 */
export const useWatchPeoplesPoolRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: peoplesPoolAbi,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useReadPool = /*#__PURE__*/ createUseReadContract({ abi: poolAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadPoolCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadPoolAllocation = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'allocation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadPoolIndividualCap = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'individualCap',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"investmentToken"`
 */
export const useReadPoolInvestmentToken = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'investmentToken',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadPoolInvestorAmountAt = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'investorAmountAt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadPoolInvestorCount = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'investorCount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"project"`
 */
export const useReadPoolProject = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'project',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"refundableAmount"`
 */
export const useReadPoolRefundableAmount = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'refundableAmount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadPoolRisingTideCache = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'risingTideCache',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadPoolRisingTideState = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'risingTideState',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadPoolRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadPoolRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadPoolRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadPoolRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadPoolRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"saleSupply"`
 */
export const useReadPoolSaleSupply = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'saleSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"totalUncappedAllocations"`
 */
export const useReadPoolTotalUncappedAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'totalUncappedAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadPoolUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useWritePool = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"invest"`
 */
export const useWritePoolInvest = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"refund"`
 */
export const useWritePoolRefund = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWritePoolRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWritePoolSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useSimulatePool = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulatePoolInvest = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulatePoolRefund = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulatePoolRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulatePoolSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__
 */
export const useWatchPoolEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: poolAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Refund"`
 */
export const useWatchPoolRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__
 */
export const useReadProject = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"MUL"`
 */
export const useReadProjectMul = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'MUL',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"approvedByLegal"`
 */
export const useReadProjectApprovedByLegal =
  /*#__PURE__*/ createUseReadContract({
    abi: projectAbi,
    functionName: 'approvedByLegal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"approvedByManager"`
 */
export const useReadProjectApprovedByManager =
  /*#__PURE__*/ createUseReadContract({
    abi: projectAbi,
    functionName: 'approvedByManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"controller"`
 */
export const useReadProjectController = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'controller',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"description"`
 */
export const useReadProjectDescription = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'description',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"hasTokens"`
 */
export const useReadProjectHasTokens = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'hasTokens',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"investmentTokenToToken"`
 */
export const useReadProjectInvestmentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: projectAbi,
    functionName: 'investmentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"isReadyForListing"`
 */
export const useReadProjectIsReadyForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: projectAbi,
    functionName: 'isReadyForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"merkleRoot"`
 */
export const useReadProjectMerkleRoot = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'merkleRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"peoplesPool"`
 */
export const useReadProjectPeoplesPool = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'peoplesPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"rate"`
 */
export const useReadProjectRate = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'rate',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"saleSupply"`
 */
export const useReadProjectSaleSupply = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'saleSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"stakersPool"`
 */
export const useReadProjectStakersPool = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'stakersPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadProjectSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: projectAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"token"`
 */
export const useReadProjectToken = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"tokenToInvestmentToken"`
 */
export const useReadProjectTokenToInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: projectAbi,
    functionName: 'tokenToInvestmentToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectAbi}__
 */
export const useWriteProject = /*#__PURE__*/ createUseWriteContract({
  abi: projectAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"approveByLegal"`
 */
export const useWriteProjectApproveByLegal =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectAbi,
    functionName: 'approveByLegal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"approveByManager"`
 */
export const useWriteProjectApproveByManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectAbi,
    functionName: 'approveByManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteProjectInvest = /*#__PURE__*/ createUseWriteContract({
  abi: projectAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectAbi}__
 */
export const useSimulateProject = /*#__PURE__*/ createUseSimulateContract({
  abi: projectAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"approveByLegal"`
 */
export const useSimulateProjectApproveByLegal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectAbi,
    functionName: 'approveByLegal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"approveByManager"`
 */
export const useSimulateProjectApproveByManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectAbi,
    functionName: 'approveByManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateProjectInvest = /*#__PURE__*/ createUseSimulateContract(
  { abi: projectAbi, functionName: 'invest' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectHelpersAbi}__
 */
export const useReadProjectHelpers = /*#__PURE__*/ createUseReadContract({
  abi: projectHelpersAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectHelpersAbi}__ and `functionName` set to `"MUL"`
 */
export const useReadProjectHelpersMul = /*#__PURE__*/ createUseReadContract({
  abi: projectHelpersAbi,
  functionName: 'MUL',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__
 */
export const useReadProjectTest = /*#__PURE__*/ createUseReadContract({
  abi: projectTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadProjectTestIsTest = /*#__PURE__*/ createUseReadContract({
  abi: projectTestAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadProjectTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadProjectTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadProjectTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"proofs"`
 */
export const useReadProjectTestProofs = /*#__PURE__*/ createUseReadContract({
  abi: projectTestAbi,
  functionName: 'proofs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadProjectTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadProjectTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadProjectTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadProjectTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadProjectTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadProjectTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectTestAbi}__
 */
export const useWriteProjectTest = /*#__PURE__*/ createUseWriteContract({
  abi: projectTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteProjectTestFailed = /*#__PURE__*/ createUseWriteContract({
  abi: projectTestAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteProjectTestSetUp = /*#__PURE__*/ createUseWriteContract({
  abi: projectTestAbi,
  functionName: 'setUp',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"testInvest"`
 */
export const useWriteProjectTestTestInvest =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectTestAbi,
    functionName: 'testInvest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"testInvestShouldRevertWithInvalidProof"`
 */
export const useWriteProjectTestTestInvestShouldRevertWithInvalidProof =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectTestAbi,
    functionName: 'testInvestShouldRevertWithInvalidProof',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectTestAbi}__
 */
export const useSimulateProjectTest = /*#__PURE__*/ createUseSimulateContract({
  abi: projectTestAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateProjectTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateProjectTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"testInvest"`
 */
export const useSimulateProjectTestTestInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectTestAbi,
    functionName: 'testInvest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectTestAbi}__ and `functionName` set to `"testInvestShouldRevertWithInvalidProof"`
 */
export const useSimulateProjectTestTestInvestShouldRevertWithInvalidProof =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectTestAbi,
    functionName: 'testInvestShouldRevertWithInvalidProof',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__
 */
export const useWatchProjectTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: projectTestAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchProjectTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchProjectTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchProjectTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchProjectTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchProjectTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchProjectTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchProjectTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchProjectTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchProjectTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchProjectTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchProjectTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchProjectTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchProjectTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchProjectTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchProjectTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchProjectTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchProjectTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchProjectTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__
 */
export const useReadProjectVoting = /*#__PURE__*/ createUseReadContract({
  abi: projectVotingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"projectToVotesIndex"`
 */
export const useReadProjectVotingProjectToVotesIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'projectToVotesIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"projectVoteCount"`
 */
export const useReadProjectVotingProjectVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'projectVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"projectVoting_finalBonus"`
 */
export const useReadProjectVotingProjectVotingFinalBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'projectVoting_finalBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"projectVoting_initialBonus"`
 */
export const useReadProjectVotingProjectVotingInitialBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'projectVoting_initialBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"projectVoting_projects"`
 */
export const useReadProjectVotingProjectVotingProjects =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'projectVoting_projects',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"projectVoting_singleSlotDuration"`
 */
export const useReadProjectVotingProjectVotingSingleSlotDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'projectVoting_singleSlotDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"projectVoting_voteLimitPerUser"`
 */
export const useReadProjectVotingProjectVotingVoteLimitPerUser =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'projectVoting_voteLimitPerUser',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"projectVoting_votingPeriod"`
 */
export const useReadProjectVotingProjectVotingVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'projectVoting_votingPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"userHasVotedForProject"`
 */
export const useReadProjectVotingUserHasVotedForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'userHasVotedForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"userVoteCount"`
 */
export const useReadProjectVotingUserVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'userVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"votes"`
 */
export const useReadProjectVotingVotes = /*#__PURE__*/ createUseReadContract({
  abi: projectVotingAbi,
  functionName: 'votes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"votesIndexToProject"`
 */
export const useReadProjectVotingVotesIndexToProject =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'votesIndexToProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectVotingAbi}__ and `functionName` set to `"weightedProjectVoteCount"`
 */
export const useReadProjectVotingWeightedProjectVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: projectVotingAbi,
    functionName: 'weightedProjectVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__
 */
export const useReadRisingTide = /*#__PURE__*/ createUseReadContract({
  abi: risingTideAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadRisingTideCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadRisingTideIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadRisingTideInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadRisingTideInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadRisingTideRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadRisingTideRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadRisingTideRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadRisingTideRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadRisingTideRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadRisingTideRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadRisingTideRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link risingTideAbi}__
 */
export const useWriteRisingTide = /*#__PURE__*/ createUseWriteContract({
  abi: risingTideAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteRisingTideRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: risingTideAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link risingTideAbi}__
 */
export const useSimulateRisingTide = /*#__PURE__*/ createUseSimulateContract({
  abi: risingTideAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link risingTideAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateRisingTideRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: risingTideAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideTestAbi}__
 */
export const useReadRisingTideTest = /*#__PURE__*/ createUseReadContract({
  abi: risingTideTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadRisingTideTestIsTest = /*#__PURE__*/ createUseReadContract({
  abi: risingTideTestAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadRisingTideTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadRisingTideTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadRisingTideTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadRisingTideTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadRisingTideTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadRisingTideTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadRisingTideTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadRisingTideTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadRisingTideTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: risingTideTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link risingTideTestAbi}__
 */
export const useWriteRisingTideTest = /*#__PURE__*/ createUseWriteContract({
  abi: risingTideTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteRisingTideTestFailed =
  /*#__PURE__*/ createUseWriteContract({
    abi: risingTideTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteRisingTideTestSetUp = /*#__PURE__*/ createUseWriteContract(
  { abi: risingTideTestAbi, functionName: 'setUp' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"testGitbookExampleCorrectly"`
 */
export const useWriteRisingTideTestTestGitbookExampleCorrectly =
  /*#__PURE__*/ createUseWriteContract({
    abi: risingTideTestAbi,
    functionName: 'testGitbookExampleCorrectly',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"testGitbookExampleFailsWithLargerCap"`
 */
export const useWriteRisingTideTestTestGitbookExampleFailsWithLargerCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: risingTideTestAbi,
    functionName: 'testGitbookExampleFailsWithLargerCap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"testGitbookExampleFailsWithSmallerCap"`
 */
export const useWriteRisingTideTestTestGitbookExampleFailsWithSmallerCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: risingTideTestAbi,
    functionName: 'testGitbookExampleFailsWithSmallerCap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"testSmallExampleCorrectly"`
 */
export const useWriteRisingTideTestTestSmallExampleCorrectly =
  /*#__PURE__*/ createUseWriteContract({
    abi: risingTideTestAbi,
    functionName: 'testSmallExampleCorrectly',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"testSmallExampleFails"`
 */
export const useWriteRisingTideTestTestSmallExampleFails =
  /*#__PURE__*/ createUseWriteContract({
    abi: risingTideTestAbi,
    functionName: 'testSmallExampleFails',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link risingTideTestAbi}__
 */
export const useSimulateRisingTideTest =
  /*#__PURE__*/ createUseSimulateContract({ abi: risingTideTestAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateRisingTideTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: risingTideTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateRisingTideTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: risingTideTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"testGitbookExampleCorrectly"`
 */
export const useSimulateRisingTideTestTestGitbookExampleCorrectly =
  /*#__PURE__*/ createUseSimulateContract({
    abi: risingTideTestAbi,
    functionName: 'testGitbookExampleCorrectly',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"testGitbookExampleFailsWithLargerCap"`
 */
export const useSimulateRisingTideTestTestGitbookExampleFailsWithLargerCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: risingTideTestAbi,
    functionName: 'testGitbookExampleFailsWithLargerCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"testGitbookExampleFailsWithSmallerCap"`
 */
export const useSimulateRisingTideTestTestGitbookExampleFailsWithSmallerCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: risingTideTestAbi,
    functionName: 'testGitbookExampleFailsWithSmallerCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"testSmallExampleCorrectly"`
 */
export const useSimulateRisingTideTestTestSmallExampleCorrectly =
  /*#__PURE__*/ createUseSimulateContract({
    abi: risingTideTestAbi,
    functionName: 'testSmallExampleCorrectly',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link risingTideTestAbi}__ and `functionName` set to `"testSmallExampleFails"`
 */
export const useSimulateRisingTideTestTestSmallExampleFails =
  /*#__PURE__*/ createUseSimulateContract({
    abi: risingTideTestAbi,
    functionName: 'testSmallExampleFails',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__
 */
export const useWatchRisingTideTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: risingTideTestAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchRisingTideTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchRisingTideTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchRisingTideTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchRisingTideTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchRisingTideTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchRisingTideTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchRisingTideTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchRisingTideTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchRisingTideTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchRisingTideTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchRisingTideTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchRisingTideTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchRisingTideTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchRisingTideTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchRisingTideTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchRisingTideTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchRisingTideTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link risingTideTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchRisingTideTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: risingTideTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__
 *
 *
 */
export const useReadSale = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 *
 *
 */
export const useReadSaleCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"CAP_VALIDATOR_ROLE"`
 *
 *
 */
export const useReadSaleCapValidatorRole = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'CAP_VALIDATOR_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 *
 */
export const useReadSaleDefaultAdminRole = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'DEFAULT_ADMIN_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"allocated"`
 *
 *
 */
export const useReadSaleAllocated = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'allocated',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"allocation"`
 *
 *
 */
export const useReadSaleAllocation = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'allocation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"end"`
 *
 *
 */
export const useReadSaleEnd = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'end',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"endRegistration"`
 *
 *
 */
export const useReadSaleEndRegistration = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'endRegistration',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 *
 */
export const useReadSaleGetRoleAdmin = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"hasRole"`
 *
 *
 */
export const useReadSaleHasRole = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"individualCap"`
 *
 *
 */
export const useReadSaleIndividualCap = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'individualCap',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"investorAmountAt"`
 *
 *
 */
export const useReadSaleInvestorAmountAt = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'investorAmountAt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"investorCount"`
 *
 *
 */
export const useReadSaleInvestorCount = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'investorCount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"maxContribution"`
 *
 *
 */
export const useReadSaleMaxContribution = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'maxContribution',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"maxTarget"`
 *
 *
 */
export const useReadSaleMaxTarget = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'maxTarget',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"merkleRoot"`
 *
 *
 */
export const useReadSaleMerkleRoot = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'merkleRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"minContribution"`
 *
 *
 */
export const useReadSaleMinContribution = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'minContribution',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"minTarget"`
 *
 *
 */
export const useReadSaleMinTarget = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'minTarget',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"paymentToken"`
 *
 *
 */
export const useReadSalePaymentToken = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'paymentToken',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"paymentTokenToToken"`
 *
 *
 */
export const useReadSalePaymentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'paymentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"rate"`
 *
 *
 */
export const useReadSaleRate = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'rate',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"refundAmount"`
 *
 *
 */
export const useReadSaleRefundAmount = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'refundAmount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"risingTideCache"`
 *
 *
 */
export const useReadSaleRisingTideCache = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'risingTideCache',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"risingTideState"`
 *
 *
 */
export const useReadSaleRisingTideState = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'risingTideState',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"risingTide_applyCap"`
 *
 *
 */
export const useReadSaleRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 *
 *
 */
export const useReadSaleRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 *
 *
 */
export const useReadSaleRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"risingTide_totalCap"`
 *
 *
 */
export const useReadSaleRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"risingTide_validating"`
 *
 *
 */
export const useReadSaleRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"start"`
 *
 *
 */
export const useReadSaleStart = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'start',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"startRegistration"`
 *
 *
 */
export const useReadSaleStartRegistration = /*#__PURE__*/ createUseReadContract(
  { abi: saleAbi, address: saleAddress, functionName: 'startRegistration' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadSaleSupportsInterface = /*#__PURE__*/ createUseReadContract(
  { abi: saleAbi, address: saleAddress, functionName: 'supportsInterface' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"token"`
 *
 *
 */
export const useReadSaleToken = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"tokenToPaymentToken"`
 *
 *
 */
export const useReadSaleTokenToPaymentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'tokenToPaymentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"totalTokensForSale"`
 *
 *
 */
export const useReadSaleTotalTokensForSale =
  /*#__PURE__*/ createUseReadContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'totalTokensForSale',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"totalUncappedAllocations"`
 *
 *
 */
export const useReadSaleTotalUncappedAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'totalUncappedAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"uncappedAllocation"`
 *
 *
 */
export const useReadSaleUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"withdrawn"`
 *
 *
 */
export const useReadSaleWithdrawn = /*#__PURE__*/ createUseReadContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'withdrawn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__
 *
 *
 */
export const useWriteSale = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"buy"`
 *
 *
 */
export const useWriteSaleBuy = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'buy',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useWriteSaleGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"refund"`
 *
 *
 */
export const useWriteSaleRefund = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useWriteSaleRenounceRole = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useWriteSaleRevokeRole = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"risingTide_validate"`
 *
 *
 */
export const useWriteSaleRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setEnd"`
 *
 *
 */
export const useWriteSaleSetEnd = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'setEnd',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setIndividualCap"`
 *
 *
 */
export const useWriteSaleSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setMaxTarget"`
 *
 *
 */
export const useWriteSaleSetMaxTarget = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'setMaxTarget',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setMerkleRoot"`
 *
 *
 */
export const useWriteSaleSetMerkleRoot = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'setMerkleRoot',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setMinContribution"`
 *
 *
 */
export const useWriteSaleSetMinContribution =
  /*#__PURE__*/ createUseWriteContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'setMinContribution',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setMinTarget"`
 *
 *
 */
export const useWriteSaleSetMinTarget = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'setMinTarget',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setStart"`
 *
 *
 */
export const useWriteSaleSetStart = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'setStart',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setToken"`
 *
 *
 */
export const useWriteSaleSetToken = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'setToken',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"withdraw"`
 *
 *
 */
export const useWriteSaleWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__
 *
 *
 */
export const useSimulateSale = /*#__PURE__*/ createUseSimulateContract({
  abi: saleAbi,
  address: saleAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"buy"`
 *
 *
 */
export const useSimulateSaleBuy = /*#__PURE__*/ createUseSimulateContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'buy',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"grantRole"`
 *
 *
 */
export const useSimulateSaleGrantRole = /*#__PURE__*/ createUseSimulateContract(
  { abi: saleAbi, address: saleAddress, functionName: 'grantRole' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"refund"`
 *
 *
 */
export const useSimulateSaleRefund = /*#__PURE__*/ createUseSimulateContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'refund',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"renounceRole"`
 *
 *
 */
export const useSimulateSaleRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"revokeRole"`
 *
 *
 */
export const useSimulateSaleRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"risingTide_validate"`
 *
 *
 */
export const useSimulateSaleRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setEnd"`
 *
 *
 */
export const useSimulateSaleSetEnd = /*#__PURE__*/ createUseSimulateContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'setEnd',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setIndividualCap"`
 *
 *
 */
export const useSimulateSaleSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setMaxTarget"`
 *
 *
 */
export const useSimulateSaleSetMaxTarget =
  /*#__PURE__*/ createUseSimulateContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'setMaxTarget',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setMerkleRoot"`
 *
 *
 */
export const useSimulateSaleSetMerkleRoot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'setMerkleRoot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setMinContribution"`
 *
 *
 */
export const useSimulateSaleSetMinContribution =
  /*#__PURE__*/ createUseSimulateContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'setMinContribution',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setMinTarget"`
 *
 *
 */
export const useSimulateSaleSetMinTarget =
  /*#__PURE__*/ createUseSimulateContract({
    abi: saleAbi,
    address: saleAddress,
    functionName: 'setMinTarget',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setStart"`
 *
 *
 */
export const useSimulateSaleSetStart = /*#__PURE__*/ createUseSimulateContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'setStart',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"setToken"`
 *
 *
 */
export const useSimulateSaleSetToken = /*#__PURE__*/ createUseSimulateContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'setToken',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleAbi}__ and `functionName` set to `"withdraw"`
 *
 *
 */
export const useSimulateSaleWithdraw = /*#__PURE__*/ createUseSimulateContract({
  abi: saleAbi,
  address: saleAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleAbi}__
 *
 *
 */
export const useWatchSaleEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: saleAbi,
  address: saleAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleAbi}__ and `eventName` set to `"Claim"`
 *
 *
 */
export const useWatchSaleClaimEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: saleAbi, address: saleAddress, eventName: 'Claim' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleAbi}__ and `eventName` set to `"Purchase"`
 *
 *
 */
export const useWatchSalePurchaseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleAbi,
    address: saleAddress,
    eventName: 'Purchase',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleAbi}__ and `eventName` set to `"Refund"`
 *
 *
 */
export const useWatchSaleRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleAbi,
    address: saleAddress,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 *
 */
export const useWatchSaleRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleAbi,
    address: saleAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleAbi}__ and `eventName` set to `"RoleGranted"`
 *
 *
 */
export const useWatchSaleRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleAbi,
    address: saleAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 *
 */
export const useWatchSaleRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleAbi,
    address: saleAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleAbi}__ and `eventName` set to `"Withdraw"`
 *
 *
 */
export const useWatchSaleWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleAbi,
    address: saleAddress,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleTestAbi}__
 */
export const useReadSaleTest = /*#__PURE__*/ createUseReadContract({
  abi: saleTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadSaleTestIsTest = /*#__PURE__*/ createUseReadContract({
  abi: saleTestAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadSaleTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: saleTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadSaleTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: saleTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadSaleTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: saleTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadSaleTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: saleTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadSaleTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: saleTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadSaleTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: saleTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadSaleTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: saleTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadSaleTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: saleTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadSaleTestTargetSenders = /*#__PURE__*/ createUseReadContract(
  { abi: saleTestAbi, functionName: 'targetSenders' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleTestAbi}__
 */
export const useWriteSaleTest = /*#__PURE__*/ createUseWriteContract({
  abi: saleTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteSaleTestFailed = /*#__PURE__*/ createUseWriteContract({
  abi: saleTestAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteSaleTestSetUp = /*#__PURE__*/ createUseWriteContract({
  abi: saleTestAbi,
  functionName: 'setUp',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"test_InitialContribution"`
 */
export const useWriteSaleTestTestInitialContribution =
  /*#__PURE__*/ createUseWriteContract({
    abi: saleTestAbi,
    functionName: 'test_InitialContribution',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleTestAbi}__
 */
export const useSimulateSaleTest = /*#__PURE__*/ createUseSimulateContract({
  abi: saleTestAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateSaleTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: saleTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateSaleTestSetUp = /*#__PURE__*/ createUseSimulateContract(
  { abi: saleTestAbi, functionName: 'setUp' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link saleTestAbi}__ and `functionName` set to `"test_InitialContribution"`
 */
export const useSimulateSaleTestTestInitialContribution =
  /*#__PURE__*/ createUseSimulateContract({
    abi: saleTestAbi,
    functionName: 'test_InitialContribution',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__
 */
export const useWatchSaleTestEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: saleTestAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"Claim"`
 */
export const useWatchSaleTestClaimEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'Claim',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"Purchase"`
 */
export const useWatchSaleTestPurchaseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'Purchase',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"Refund"`
 */
export const useWatchSaleTestRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchSaleTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchSaleTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchSaleTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchSaleTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchSaleTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchSaleTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchSaleTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchSaleTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchSaleTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchSaleTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchSaleTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchSaleTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchSaleTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchSaleTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchSaleTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchSaleTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchSaleTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link saleTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchSaleTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: saleTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scriptAbi}__
 */
export const useReadScript = /*#__PURE__*/ createUseReadContract({
  abi: scriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadScriptIsScript = /*#__PURE__*/ createUseReadContract({
  abi: scriptAbi,
  functionName: 'IS_SCRIPT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__
 */
export const useReadStakersPool = /*#__PURE__*/ createUseReadContract({
  abi: stakersPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadStakersPoolCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadStakersPoolAllocation = /*#__PURE__*/ createUseReadContract(
  { abi: stakersPoolAbi, functionName: 'allocation' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadStakersPoolIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"investmentToken"`
 */
export const useReadStakersPoolInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'investmentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadStakersPoolInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadStakersPoolInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"project"`
 */
export const useReadStakersPoolProject = /*#__PURE__*/ createUseReadContract({
  abi: stakersPoolAbi,
  functionName: 'project',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"refundableAmount"`
 */
export const useReadStakersPoolRefundableAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'refundableAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadStakersPoolRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadStakersPoolRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadStakersPoolRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadStakersPoolRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadStakersPoolRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadStakersPoolRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadStakersPoolRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"saleSupply"`
 */
export const useReadStakersPoolSaleSupply = /*#__PURE__*/ createUseReadContract(
  { abi: stakersPoolAbi, functionName: 'saleSupply' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"totalUncappedAllocations"`
 */
export const useReadStakersPoolTotalUncappedAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'totalUncappedAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadStakersPoolUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: stakersPoolAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakersPoolAbi}__
 */
export const useWriteStakersPool = /*#__PURE__*/ createUseWriteContract({
  abi: stakersPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteStakersPoolInvest = /*#__PURE__*/ createUseWriteContract({
  abi: stakersPoolAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteStakersPoolRefund = /*#__PURE__*/ createUseWriteContract({
  abi: stakersPoolAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteStakersPoolRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakersPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWriteStakersPoolSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakersPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakersPoolAbi}__
 */
export const useSimulateStakersPool = /*#__PURE__*/ createUseSimulateContract({
  abi: stakersPoolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateStakersPoolInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakersPoolAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateStakersPoolRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakersPoolAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateStakersPoolRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakersPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakersPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulateStakersPoolSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakersPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakersPoolAbi}__
 */
export const useWatchStakersPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: stakersPoolAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakersPoolAbi}__ and `eventName` set to `"Refund"`
 */
export const useWatchStakersPoolRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakersPoolAbi,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingAbi}__
 */
export const useReadStaking = /*#__PURE__*/ createUseReadContract({
  abi: stakingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"UNBONDING_PERIOD"`
 */
export const useReadStakingUnbondingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingAbi,
    functionName: 'UNBONDING_PERIOD',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"hasStaked"`
 */
export const useReadStakingHasStaked = /*#__PURE__*/ createUseReadContract({
  abi: stakingAbi,
  functionName: 'hasStaked',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"stakes"`
 */
export const useReadStakingStakes = /*#__PURE__*/ createUseReadContract({
  abi: stakingAbi,
  functionName: 'stakes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"token"`
 */
export const useReadStakingToken = /*#__PURE__*/ createUseReadContract({
  abi: stakingAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"unbondings"`
 */
export const useReadStakingUnbondings = /*#__PURE__*/ createUseReadContract({
  abi: stakingAbi,
  functionName: 'unbondings',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"withdrawable"`
 */
export const useReadStakingWithdrawable = /*#__PURE__*/ createUseReadContract({
  abi: stakingAbi,
  functionName: 'withdrawable',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingAbi}__
 */
export const useWriteStaking = /*#__PURE__*/ createUseWriteContract({
  abi: stakingAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"rebond"`
 */
export const useWriteStakingRebond = /*#__PURE__*/ createUseWriteContract({
  abi: stakingAbi,
  functionName: 'rebond',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"stake"`
 */
export const useWriteStakingStake = /*#__PURE__*/ createUseWriteContract({
  abi: stakingAbi,
  functionName: 'stake',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"unbond"`
 */
export const useWriteStakingUnbond = /*#__PURE__*/ createUseWriteContract({
  abi: stakingAbi,
  functionName: 'unbond',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteStakingWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: stakingAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingAbi}__
 */
export const useSimulateStaking = /*#__PURE__*/ createUseSimulateContract({
  abi: stakingAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"rebond"`
 */
export const useSimulateStakingRebond = /*#__PURE__*/ createUseSimulateContract(
  { abi: stakingAbi, functionName: 'rebond' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"stake"`
 */
export const useSimulateStakingStake = /*#__PURE__*/ createUseSimulateContract({
  abi: stakingAbi,
  functionName: 'stake',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"unbond"`
 */
export const useSimulateStakingUnbond = /*#__PURE__*/ createUseSimulateContract(
  { abi: stakingAbi, functionName: 'unbond' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateStakingWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingAbi}__
 */
export const useWatchStakingEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: stakingAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingAbi}__ and `eventName` set to `"Rebond"`
 */
export const useWatchStakingRebondEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingAbi,
    eventName: 'Rebond',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingAbi}__ and `eventName` set to `"StakeFunds"`
 */
export const useWatchStakingStakeFundsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingAbi,
    eventName: 'StakeFunds',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingAbi}__ and `eventName` set to `"Unbond"`
 */
export const useWatchStakingUnbondEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingAbi,
    eventName: 'Unbond',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const useWatchStakingWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingAbi,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const useReadStdAssertions = /*#__PURE__*/ createUseReadContract({
  abi: stdAssertionsAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdAssertionsAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadStdAssertionsIsTest = /*#__PURE__*/ createUseReadContract({
  abi: stdAssertionsAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const useWriteStdAssertions = /*#__PURE__*/ createUseWriteContract({
  abi: stdAssertionsAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stdAssertionsAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteStdAssertionsFailed = /*#__PURE__*/ createUseWriteContract(
  { abi: stdAssertionsAbi, functionName: 'failed' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const useSimulateStdAssertions = /*#__PURE__*/ createUseSimulateContract(
  { abi: stdAssertionsAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stdAssertionsAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateStdAssertionsFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stdAssertionsAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const useWatchStdAssertionsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: stdAssertionsAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log"`
 */
export const useWatchStdAssertionsLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchStdAssertionsLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchStdAssertionsLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchStdAssertionsLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchStdAssertionsLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchStdAssertionsLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchStdAssertionsLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchStdAssertionsLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchStdAssertionsLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchStdAssertionsLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchStdAssertionsLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchStdAssertionsLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchStdAssertionsLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchStdAssertionsLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchStdAssertionsLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchStdAssertionsLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchStdAssertionsLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchStdAssertionsLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__
 */
export const useReadStdInvariant = /*#__PURE__*/ createUseReadContract({
  abi: stdInvariantAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadStdInvariantExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadStdInvariantExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadStdInvariantExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadStdInvariantTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadStdInvariantTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadStdInvariantTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadStdInvariantTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadStdInvariantTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadStdInvariantTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__
 */
export const useReadTest = /*#__PURE__*/ createUseReadContract({ abi: testAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadTestIsTest = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadTestExcludeArtifacts = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'excludeArtifacts',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadTestExcludeContracts = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'excludeContracts',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadTestExcludeSenders = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'excludeSenders',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: testAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadTestTargetArtifacts = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'targetArtifacts',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadTestTargetContracts = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'targetContracts',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadTestTargetInterfaces = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'targetInterfaces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadTestTargetSelectors = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'targetSelectors',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadTestTargetSenders = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'targetSenders',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testAbi}__
 */
export const useWriteTest = /*#__PURE__*/ createUseWriteContract({
  abi: testAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteTestFailed = /*#__PURE__*/ createUseWriteContract({
  abi: testAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testAbi}__
 */
export const useSimulateTest = /*#__PURE__*/ createUseSimulateContract({
  abi: testAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateTestFailed = /*#__PURE__*/ createUseSimulateContract({
  abi: testAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__
 */
export const useWatchTestEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: testAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log"`
 */
export const useWatchTestLogEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: testAbi,
  eventName: 'log',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchTestLogsEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: testAbi,
  eventName: 'logs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__
 */
export const useReadTestPool = /*#__PURE__*/ createUseReadContract({
  abi: testPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadTestPoolCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadTestPoolAllocation = /*#__PURE__*/ createUseReadContract({
  abi: testPoolAbi,
  functionName: 'allocation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadTestPoolIndividualCap = /*#__PURE__*/ createUseReadContract(
  { abi: testPoolAbi, functionName: 'individualCap' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"investmentToken"`
 */
export const useReadTestPoolInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'investmentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadTestPoolInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadTestPoolInvestorCount = /*#__PURE__*/ createUseReadContract(
  { abi: testPoolAbi, functionName: 'investorCount' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"project"`
 */
export const useReadTestPoolProject = /*#__PURE__*/ createUseReadContract({
  abi: testPoolAbi,
  functionName: 'project',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"refundableAmount"`
 */
export const useReadTestPoolRefundableAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'refundableAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadTestPoolRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadTestPoolRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadTestPoolRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadTestPoolRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadTestPoolRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadTestPoolRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadTestPoolRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"saleSupply"`
 */
export const useReadTestPoolSaleSupply = /*#__PURE__*/ createUseReadContract({
  abi: testPoolAbi,
  functionName: 'saleSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"totalUncappedAllocations"`
 */
export const useReadTestPoolTotalUncappedAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'totalUncappedAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadTestPoolUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: testPoolAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testPoolAbi}__
 */
export const useWriteTestPool = /*#__PURE__*/ createUseWriteContract({
  abi: testPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteTestPoolInvest = /*#__PURE__*/ createUseWriteContract({
  abi: testPoolAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteTestPoolRefund = /*#__PURE__*/ createUseWriteContract({
  abi: testPoolAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteTestPoolRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: testPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWriteTestPoolSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: testPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testPoolAbi}__
 */
export const useSimulateTestPool = /*#__PURE__*/ createUseSimulateContract({
  abi: testPoolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateTestPoolInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testPoolAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateTestPoolRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testPoolAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateTestPoolRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulateTestPoolSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testPoolAbi}__
 */
export const useWatchTestPoolEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: testPoolAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testPoolAbi}__ and `eventName` set to `"Refund"`
 */
export const useWatchTestPoolRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testPoolAbi,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__
 */
export const useReadTestProjectVoting = /*#__PURE__*/ createUseReadContract({
  abi: testProjectVotingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"numSlots"`
 */
export const useReadTestProjectVotingNumSlots =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'numSlots',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"projectToVotesIndex"`
 */
export const useReadTestProjectVotingProjectToVotesIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'projectToVotesIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"projectVoteCount"`
 */
export const useReadTestProjectVotingProjectVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'projectVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"projectVoting_finalBonus"`
 */
export const useReadTestProjectVotingProjectVotingFinalBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'projectVoting_finalBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"projectVoting_initialBonus"`
 */
export const useReadTestProjectVotingProjectVotingInitialBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'projectVoting_initialBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"projectVoting_projects"`
 */
export const useReadTestProjectVotingProjectVotingProjects =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'projectVoting_projects',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"projectVoting_singleSlotDuration"`
 */
export const useReadTestProjectVotingProjectVotingSingleSlotDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'projectVoting_singleSlotDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"projectVoting_voteLimitPerUser"`
 */
export const useReadTestProjectVotingProjectVotingVoteLimitPerUser =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'projectVoting_voteLimitPerUser',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"projectVoting_votingPeriod"`
 */
export const useReadTestProjectVotingProjectVotingVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'projectVoting_votingPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"projects"`
 */
export const useReadTestProjectVotingProjects =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'projects',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"test_calculateWeightedVote"`
 */
export const useReadTestProjectVotingTestCalculateWeightedVote =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'test_calculateWeightedVote',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"test_getWinners"`
 */
export const useReadTestProjectVotingTestGetWinners =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'test_getWinners',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"test_sortVotes"`
 */
export const useReadTestProjectVotingTestSortVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'test_sortVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"userHasVotedForProject"`
 */
export const useReadTestProjectVotingUserHasVotedForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'userHasVotedForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"userVoteCount"`
 */
export const useReadTestProjectVotingUserVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'userVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"votes"`
 */
export const useReadTestProjectVotingVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'votes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"votesIndexToProject"`
 */
export const useReadTestProjectVotingVotesIndexToProject =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'votesIndexToProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const useReadTestProjectVotingVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"weightedProjectVoteCount"`
 */
export const useReadTestProjectVotingWeightedProjectVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: testProjectVotingAbi,
    functionName: 'weightedProjectVoteCount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testProjectVotingAbi}__
 */
export const useWriteTestProjectVoting = /*#__PURE__*/ createUseWriteContract({
  abi: testProjectVotingAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"test_vote"`
 */
export const useWriteTestProjectVotingTestVote =
  /*#__PURE__*/ createUseWriteContract({
    abi: testProjectVotingAbi,
    functionName: 'test_vote',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testProjectVotingAbi}__
 */
export const useSimulateTestProjectVoting =
  /*#__PURE__*/ createUseSimulateContract({ abi: testProjectVotingAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testProjectVotingAbi}__ and `functionName` set to `"test_vote"`
 */
export const useSimulateTestProjectVotingTestVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testProjectVotingAbi,
    functionName: 'test_vote',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__
 */
export const useReadTestRisingTideWithCustomAmounts =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadTestRisingTideWithCustomAmountsCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadTestRisingTideWithCustomAmountsIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadTestRisingTideWithCustomAmountsInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadTestRisingTideWithCustomAmountsInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadTestRisingTideWithCustomAmountsRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadTestRisingTideWithCustomAmountsRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadTestRisingTideWithCustomAmountsRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadTestRisingTideWithCustomAmountsRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadTestRisingTideWithCustomAmountsRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadTestRisingTideWithCustomAmountsRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadTestRisingTideWithCustomAmountsRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__
 */
export const useWriteTestRisingTideWithCustomAmounts =
  /*#__PURE__*/ createUseWriteContract({
    abi: testRisingTideWithCustomAmountsAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteTestRisingTideWithCustomAmountsRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"setCap"`
 */
export const useWriteTestRisingTideWithCustomAmountsSetCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'setCap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"test_invest"`
 */
export const useWriteTestRisingTideWithCustomAmountsTestInvest =
  /*#__PURE__*/ createUseWriteContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'test_invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__
 */
export const useSimulateTestRisingTideWithCustomAmounts =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testRisingTideWithCustomAmountsAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateTestRisingTideWithCustomAmountsRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"setCap"`
 */
export const useSimulateTestRisingTideWithCustomAmountsSetCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'setCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"test_invest"`
 */
export const useSimulateTestRisingTideWithCustomAmountsTestInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testRisingTideWithCustomAmountsAbi,
    functionName: 'test_invest',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__
 */
export const useReadTestRisingTideWithStaticAmounts =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadTestRisingTideWithStaticAmountsCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadTestRisingTideWithStaticAmountsIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadTestRisingTideWithStaticAmountsInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadTestRisingTideWithStaticAmountsInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadTestRisingTideWithStaticAmountsRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadTestRisingTideWithStaticAmountsRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadTestRisingTideWithStaticAmountsRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadTestRisingTideWithStaticAmountsRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadTestRisingTideWithStaticAmountsRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadTestRisingTideWithStaticAmountsRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadTestRisingTideWithStaticAmountsRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__
 */
export const useWriteTestRisingTideWithStaticAmounts =
  /*#__PURE__*/ createUseWriteContract({
    abi: testRisingTideWithStaticAmountsAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteTestRisingTideWithStaticAmountsRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"setCap"`
 */
export const useWriteTestRisingTideWithStaticAmountsSetCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'setCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__
 */
export const useSimulateTestRisingTideWithStaticAmounts =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testRisingTideWithStaticAmountsAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateTestRisingTideWithStaticAmountsRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"setCap"`
 */
export const useSimulateTestRisingTideWithStaticAmountsSetCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testRisingTideWithStaticAmountsAbi,
    functionName: 'setCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__
 */
export const useReadVesting = /*#__PURE__*/ createUseReadContract({
  abi: vestingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadVestingDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"PRIVATE_SALE_MAX_CLIFF_MONTHS"`
 */
export const useReadVestingPrivateSaleMaxCliffMonths =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'PRIVATE_SALE_MAX_CLIFF_MONTHS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"SALE_MANAGER_ROLE"`
 */
export const useReadVestingSaleManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'SALE_MANAGER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"claimable"`
 */
export const useReadVestingClaimable = /*#__PURE__*/ createUseReadContract({
  abi: vestingAbi,
  functionName: 'claimable',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"claimablePrivate"`
 */
export const useReadVestingClaimablePrivate =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'claimablePrivate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"claimablePublic"`
 */
export const useReadVestingClaimablePublic =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'claimablePublic',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"claimed"`
 */
export const useReadVestingClaimed = /*#__PURE__*/ createUseReadContract({
  abi: vestingAbi,
  functionName: 'claimed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadVestingGetRoleAdmin = /*#__PURE__*/ createUseReadContract({
  abi: vestingAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadVestingHasRole = /*#__PURE__*/ createUseReadContract({
  abi: vestingAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"privateAllocations"`
 */
export const useReadVestingPrivateAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'privateAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"privateSaleCap"`
 */
export const useReadVestingPrivateSaleCap = /*#__PURE__*/ createUseReadContract(
  { abi: vestingAbi, functionName: 'privateSaleCap' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"publicSaleCliffMonths"`
 */
export const useReadVestingPublicSaleCliffMonths =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'publicSaleCliffMonths',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"publicSaleVestingMonths"`
 */
export const useReadVestingPublicSaleVestingMonths =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'publicSaleVestingMonths',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"sales"`
 */
export const useReadVestingSales = /*#__PURE__*/ createUseReadContract({
  abi: vestingAbi,
  functionName: 'sales',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"startTime"`
 */
export const useReadVestingStartTime = /*#__PURE__*/ createUseReadContract({
  abi: vestingAbi,
  functionName: 'startTime',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadVestingSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"token"`
 */
export const useReadVestingToken = /*#__PURE__*/ createUseReadContract({
  abi: vestingAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"totalAllocated"`
 */
export const useReadVestingTotalAllocated = /*#__PURE__*/ createUseReadContract(
  { abi: vestingAbi, functionName: 'totalAllocated' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"totalAllocatedPrivate"`
 */
export const useReadVestingTotalAllocatedPrivate =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'totalAllocatedPrivate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"totalAllocatedPublic"`
 */
export const useReadVestingTotalAllocatedPublic =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'totalAllocatedPublic',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"totalPrivateSales"`
 */
export const useReadVestingTotalPrivateSales =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingAbi,
    functionName: 'totalPrivateSales',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"usedNonces"`
 */
export const useReadVestingUsedNonces = /*#__PURE__*/ createUseReadContract({
  abi: vestingAbi,
  functionName: 'usedNonces',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingAbi}__
 */
export const useWriteVesting = /*#__PURE__*/ createUseWriteContract({
  abi: vestingAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"addSale"`
 */
export const useWriteVestingAddSale = /*#__PURE__*/ createUseWriteContract({
  abi: vestingAbi,
  functionName: 'addSale',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"claim"`
 */
export const useWriteVestingClaim = /*#__PURE__*/ createUseWriteContract({
  abi: vestingAbi,
  functionName: 'claim',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"createPrivateSaleVest"`
 */
export const useWriteVestingCreatePrivateSaleVest =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingAbi,
    functionName: 'createPrivateSaleVest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteVestingGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: vestingAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteVestingRefund = /*#__PURE__*/ createUseWriteContract({
  abi: vestingAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteVestingRenounceRole = /*#__PURE__*/ createUseWriteContract(
  { abi: vestingAbi, functionName: 'renounceRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteVestingRevokeRole = /*#__PURE__*/ createUseWriteContract({
  abi: vestingAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"setStartTime"`
 */
export const useWriteVestingSetStartTime = /*#__PURE__*/ createUseWriteContract(
  { abi: vestingAbi, functionName: 'setStartTime' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingAbi}__
 */
export const useSimulateVesting = /*#__PURE__*/ createUseSimulateContract({
  abi: vestingAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"addSale"`
 */
export const useSimulateVestingAddSale =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingAbi,
    functionName: 'addSale',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"claim"`
 */
export const useSimulateVestingClaim = /*#__PURE__*/ createUseSimulateContract({
  abi: vestingAbi,
  functionName: 'claim',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"createPrivateSaleVest"`
 */
export const useSimulateVestingCreatePrivateSaleVest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingAbi,
    functionName: 'createPrivateSaleVest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateVestingGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateVestingRefund = /*#__PURE__*/ createUseSimulateContract(
  { abi: vestingAbi, functionName: 'refund' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateVestingRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateVestingRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingAbi}__ and `functionName` set to `"setStartTime"`
 */
export const useSimulateVestingSetStartTime =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingAbi,
    functionName: 'setStartTime',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingAbi}__
 */
export const useWatchVestingEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: vestingAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingAbi}__ and `eventName` set to `"AddSale"`
 */
export const useWatchVestingAddSaleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingAbi,
    eventName: 'AddSale',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingAbi}__ and `eventName` set to `"ClaimVesting"`
 */
export const useWatchVestingClaimVestingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingAbi,
    eventName: 'ClaimVesting',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchVestingRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchVestingRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchVestingRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__
 */
export const useReadVm = /*#__PURE__*/ createUseReadContract({ abi: vmAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"activeFork"`
 */
export const useReadVmActiveFork = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'activeFork',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"addr"`
 */
export const useReadVmAddr = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'addr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assume"`
 */
export const useReadVmAssume = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assume',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"computeCreate2Address"`
 */
export const useReadVmComputeCreate2Address =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'computeCreate2Address',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"computeCreateAddress"`
 */
export const useReadVmComputeCreateAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'computeCreateAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deriveKey"`
 */
export const useReadVmDeriveKey = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'deriveKey',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envAddress"`
 */
export const useReadVmEnvAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBool"`
 */
export const useReadVmEnvBool = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBytes"`
 */
export const useReadVmEnvBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBytes32"`
 */
export const useReadVmEnvBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envInt"`
 */
export const useReadVmEnvInt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envOr"`
 */
export const useReadVmEnvOr = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envString"`
 */
export const useReadVmEnvString = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envUint"`
 */
export const useReadVmEnvUint = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fsMetadata"`
 */
export const useReadVmFsMetadata = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'fsMetadata',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadVmGetBlockNumber = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getBlockNumber',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getBlockTimestamp"`
 */
export const useReadVmGetBlockTimestamp = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getBlockTimestamp',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getCode"`
 */
export const useReadVmGetCode = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getCode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getDeployedCode"`
 */
export const useReadVmGetDeployedCode = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getDeployedCode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getLabel"`
 */
export const useReadVmGetLabel = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useReadVmGetNonce = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isPersistent"`
 */
export const useReadVmIsPersistent = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'isPersistent',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"keyExists"`
 */
export const useReadVmKeyExists = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'keyExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"load"`
 */
export const useReadVmLoad = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'load',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseAddress"`
 */
export const useReadVmParseAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBool"`
 */
export const useReadVmParseBool = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBytes"`
 */
export const useReadVmParseBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBytes32"`
 */
export const useReadVmParseBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseInt"`
 */
export const useReadVmParseInt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJson"`
 */
export const useReadVmParseJson = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJson',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonAddress"`
 */
export const useReadVmParseJsonAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonAddressArray"`
 */
export const useReadVmParseJsonAddressArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseJsonAddressArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBool"`
 */
export const useReadVmParseJsonBool = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBoolArray"`
 */
export const useReadVmParseJsonBoolArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBoolArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes"`
 */
export const useReadVmParseJsonBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes32"`
 */
export const useReadVmParseJsonBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes32Array"`
 */
export const useReadVmParseJsonBytes32Array =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseJsonBytes32Array',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytesArray"`
 */
export const useReadVmParseJsonBytesArray = /*#__PURE__*/ createUseReadContract(
  { abi: vmAbi, functionName: 'parseJsonBytesArray' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonInt"`
 */
export const useReadVmParseJsonInt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonIntArray"`
 */
export const useReadVmParseJsonIntArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonIntArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonKeys"`
 */
export const useReadVmParseJsonKeys = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonKeys',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonString"`
 */
export const useReadVmParseJsonString = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonStringArray"`
 */
export const useReadVmParseJsonStringArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseJsonStringArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonUint"`
 */
export const useReadVmParseJsonUint = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonUintArray"`
 */
export const useReadVmParseJsonUintArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonUintArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseUint"`
 */
export const useReadVmParseUint = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"projectRoot"`
 */
export const useReadVmProjectRoot = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'projectRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readDir"`
 */
export const useReadVmReadDir = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readDir',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readFile"`
 */
export const useReadVmReadFile = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readFile',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readFileBinary"`
 */
export const useReadVmReadFileBinary = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readFileBinary',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readLine"`
 */
export const useReadVmReadLine = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readLine',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readLink"`
 */
export const useReadVmReadLink = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readLink',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrl"`
 */
export const useReadVmRpcUrl = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'rpcUrl',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrlStructs"`
 */
export const useReadVmRpcUrlStructs = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'rpcUrlStructs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrls"`
 */
export const useReadVmRpcUrls = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'rpcUrls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const useReadVmSign = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"signP256"`
 */
export const useReadVmSignP256 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'signP256',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"toBase64"`
 */
export const useReadVmToBase64 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'toBase64',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"toBase64URL"`
 */
export const useReadVmToBase64Url = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'toBase64URL',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"toString"`
 */
export const useReadVmToString = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'toString',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__
 */
export const useWriteVm = /*#__PURE__*/ createUseWriteContract({ abi: vmAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"accesses"`
 */
export const useWriteVmAccesses = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"allowCheatcodes"`
 */
export const useWriteVmAllowCheatcodes = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'allowCheatcodes',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useWriteVmBreakpoint = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"broadcast"`
 */
export const useWriteVmBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"chainId"`
 */
export const useWriteVmChainId = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'chainId',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"clearMockedCalls"`
 */
export const useWriteVmClearMockedCalls = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'clearMockedCalls',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"closeFile"`
 */
export const useWriteVmCloseFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"coinbase"`
 */
export const useWriteVmCoinbase = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'coinbase',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"copyFile"`
 */
export const useWriteVmCopyFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createDir"`
 */
export const useWriteVmCreateDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createFork"`
 */
export const useWriteVmCreateFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createSelectFork"`
 */
export const useWriteVmCreateSelectFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createSelectFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createWallet"`
 */
export const useWriteVmCreateWallet = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createWallet',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deal"`
 */
export const useWriteVmDeal = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'deal',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshot"`
 */
export const useWriteVmDeleteSnapshot = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'deleteSnapshot',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshots"`
 */
export const useWriteVmDeleteSnapshots = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'deleteSnapshots',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"difficulty"`
 */
export const useWriteVmDifficulty = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'difficulty',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"dumpState"`
 */
export const useWriteVmDumpState = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'dumpState',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"etch"`
 */
export const useWriteVmEtch = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'etch',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useWriteVmEthGetLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"exists"`
 */
export const useWriteVmExists = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCall"`
 */
export const useWriteVmExpectCall = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCallMinGas"`
 */
export const useWriteVmExpectCallMinGas = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectCallMinGas',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectEmit"`
 */
export const useWriteVmExpectEmit = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectEmit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectRevert"`
 */
export const useWriteVmExpectRevert = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectRevert',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemory"`
 */
export const useWriteVmExpectSafeMemory = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectSafeMemory',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemoryCall"`
 */
export const useWriteVmExpectSafeMemoryCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'expectSafeMemoryCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fee"`
 */
export const useWriteVmFee = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"ffi"`
 */
export const useWriteVmFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useWriteVmGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useWriteVmGetMappingLength = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getMappingLength',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useWriteVmGetMappingSlotAt = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getMappingSlotAt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useWriteVmGetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useWriteVmGetRecordedLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getRecordedLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isDir"`
 */
export const useWriteVmIsDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isFile"`
 */
export const useWriteVmIsFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"label"`
 */
export const useWriteVmLabel = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"loadAllocs"`
 */
export const useWriteVmLoadAllocs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'loadAllocs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"makePersistent"`
 */
export const useWriteVmMakePersistent = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'makePersistent',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCall"`
 */
export const useWriteVmMockCall = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'mockCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCallRevert"`
 */
export const useWriteVmMockCallRevert = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'mockCallRevert',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useWriteVmPauseGasMetering = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'pauseGasMetering',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prank"`
 */
export const useWriteVmPrank = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'prank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prevrandao"`
 */
export const useWriteVmPrevrandao = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'prevrandao',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readCallers"`
 */
export const useWriteVmReadCallers = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'readCallers',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"record"`
 */
export const useWriteVmRecord = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useWriteVmRecordLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useWriteVmRememberKey = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'rememberKey',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeDir"`
 */
export const useWriteVmRemoveDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeFile"`
 */
export const useWriteVmRemoveFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resetNonce"`
 */
export const useWriteVmResetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'resetNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useWriteVmResumeGasMetering = /*#__PURE__*/ createUseWriteContract(
  { abi: vmAbi, functionName: 'resumeGasMetering' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertTo"`
 */
export const useWriteVmRevertTo = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'revertTo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertToAndDelete"`
 */
export const useWriteVmRevertToAndDelete = /*#__PURE__*/ createUseWriteContract(
  { abi: vmAbi, functionName: 'revertToAndDelete' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revokePersistent"`
 */
export const useWriteVmRevokePersistent = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'revokePersistent',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"roll"`
 */
export const useWriteVmRoll = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'roll',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rollFork"`
 */
export const useWriteVmRollFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'rollFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpc"`
 */
export const useWriteVmRpc = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"selectFork"`
 */
export const useWriteVmSelectFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'selectFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useWriteVmSerializeAddress = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeAddress',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useWriteVmSerializeBool = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeBool',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useWriteVmSerializeBytes = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeBytes',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useWriteVmSerializeBytes32 = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeBytes32',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useWriteVmSerializeInt = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeInt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useWriteVmSerializeJson = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeJson',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeString"`
 */
export const useWriteVmSerializeString = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeString',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useWriteVmSerializeUint = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeUint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setEnv"`
 */
export const useWriteVmSetEnv = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonce"`
 */
export const useWriteVmSetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'setNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonceUnsafe"`
 */
export const useWriteVmSetNonceUnsafe = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'setNonceUnsafe',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const useWriteVmSign = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"skip"`
 */
export const useWriteVmSkip = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sleep"`
 */
export const useWriteVmSleep = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"snapshot"`
 */
export const useWriteVmSnapshot = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'snapshot',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useWriteVmStartBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'startBroadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useWriteVmStartMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startPrank"`
 */
export const useWriteVmStartPrank = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'startPrank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useWriteVmStartStateDiffRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useWriteVmStopAndReturnStateDiff =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useWriteVmStopBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'stopBroadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useWriteVmStopMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopPrank"`
 */
export const useWriteVmStopPrank = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'stopPrank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"store"`
 */
export const useWriteVmStore = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'store',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"transact"`
 */
export const useWriteVmTransact = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'transact',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useWriteVmTryFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"txGasPrice"`
 */
export const useWriteVmTxGasPrice = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'txGasPrice',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"unixTime"`
 */
export const useWriteVmUnixTime = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"warp"`
 */
export const useWriteVmWarp = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'warp',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFile"`
 */
export const useWriteVmWriteFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useWriteVmWriteFileBinary = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeFileBinary',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeJson"`
 */
export const useWriteVmWriteJson = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeLine"`
 */
export const useWriteVmWriteLine = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__
 */
export const useSimulateVm = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"accesses"`
 */
export const useSimulateVmAccesses = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"allowCheatcodes"`
 */
export const useSimulateVmAllowCheatcodes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'allowCheatcodes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useSimulateVmBreakpoint = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"broadcast"`
 */
export const useSimulateVmBroadcast = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"chainId"`
 */
export const useSimulateVmChainId = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'chainId',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"clearMockedCalls"`
 */
export const useSimulateVmClearMockedCalls =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'clearMockedCalls',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"closeFile"`
 */
export const useSimulateVmCloseFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"coinbase"`
 */
export const useSimulateVmCoinbase = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'coinbase',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"copyFile"`
 */
export const useSimulateVmCopyFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createDir"`
 */
export const useSimulateVmCreateDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createFork"`
 */
export const useSimulateVmCreateFork = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'createFork',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createSelectFork"`
 */
export const useSimulateVmCreateSelectFork =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'createSelectFork',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createWallet"`
 */
export const useSimulateVmCreateWallet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'createWallet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deal"`
 */
export const useSimulateVmDeal = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'deal',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshot"`
 */
export const useSimulateVmDeleteSnapshot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'deleteSnapshot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshots"`
 */
export const useSimulateVmDeleteSnapshots =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'deleteSnapshots',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"difficulty"`
 */
export const useSimulateVmDifficulty = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'difficulty',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"dumpState"`
 */
export const useSimulateVmDumpState = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'dumpState',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"etch"`
 */
export const useSimulateVmEtch = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'etch',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useSimulateVmEthGetLogs = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"exists"`
 */
export const useSimulateVmExists = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCall"`
 */
export const useSimulateVmExpectCall = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'expectCall',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCallMinGas"`
 */
export const useSimulateVmExpectCallMinGas =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectCallMinGas',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectEmit"`
 */
export const useSimulateVmExpectEmit = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'expectEmit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectRevert"`
 */
export const useSimulateVmExpectRevert =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectRevert',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemory"`
 */
export const useSimulateVmExpectSafeMemory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectSafeMemory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemoryCall"`
 */
export const useSimulateVmExpectSafeMemoryCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectSafeMemoryCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fee"`
 */
export const useSimulateVmFee = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"ffi"`
 */
export const useSimulateVmFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useSimulateVmGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useSimulateVmGetMappingLength =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useSimulateVmGetMappingSlotAt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useSimulateVmGetNonce = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useSimulateVmGetRecordedLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isDir"`
 */
export const useSimulateVmIsDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isFile"`
 */
export const useSimulateVmIsFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"label"`
 */
export const useSimulateVmLabel = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"loadAllocs"`
 */
export const useSimulateVmLoadAllocs = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'loadAllocs',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"makePersistent"`
 */
export const useSimulateVmMakePersistent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'makePersistent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCall"`
 */
export const useSimulateVmMockCall = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'mockCall',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCallRevert"`
 */
export const useSimulateVmMockCallRevert =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'mockCallRevert',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useSimulateVmPauseGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prank"`
 */
export const useSimulateVmPrank = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'prank',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prevrandao"`
 */
export const useSimulateVmPrevrandao = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'prevrandao',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readCallers"`
 */
export const useSimulateVmReadCallers = /*#__PURE__*/ createUseSimulateContract(
  { abi: vmAbi, functionName: 'readCallers' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"record"`
 */
export const useSimulateVmRecord = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useSimulateVmRecordLogs = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useSimulateVmRememberKey = /*#__PURE__*/ createUseSimulateContract(
  { abi: vmAbi, functionName: 'rememberKey' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeDir"`
 */
export const useSimulateVmRemoveDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeFile"`
 */
export const useSimulateVmRemoveFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resetNonce"`
 */
export const useSimulateVmResetNonce = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'resetNonce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useSimulateVmResumeGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertTo"`
 */
export const useSimulateVmRevertTo = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'revertTo',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertToAndDelete"`
 */
export const useSimulateVmRevertToAndDelete =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'revertToAndDelete',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revokePersistent"`
 */
export const useSimulateVmRevokePersistent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'revokePersistent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"roll"`
 */
export const useSimulateVmRoll = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'roll',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rollFork"`
 */
export const useSimulateVmRollFork = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'rollFork',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpc"`
 */
export const useSimulateVmRpc = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"selectFork"`
 */
export const useSimulateVmSelectFork = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'selectFork',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useSimulateVmSerializeAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useSimulateVmSerializeBool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeBool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useSimulateVmSerializeBytes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useSimulateVmSerializeBytes32 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useSimulateVmSerializeInt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeInt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useSimulateVmSerializeJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeString"`
 */
export const useSimulateVmSerializeString =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useSimulateVmSerializeUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setEnv"`
 */
export const useSimulateVmSetEnv = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonce"`
 */
export const useSimulateVmSetNonce = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'setNonce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonceUnsafe"`
 */
export const useSimulateVmSetNonceUnsafe =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'setNonceUnsafe',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const useSimulateVmSign = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"skip"`
 */
export const useSimulateVmSkip = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sleep"`
 */
export const useSimulateVmSleep = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"snapshot"`
 */
export const useSimulateVmSnapshot = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'snapshot',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useSimulateVmStartBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useSimulateVmStartMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startPrank"`
 */
export const useSimulateVmStartPrank = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'startPrank',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useSimulateVmStartStateDiffRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useSimulateVmStopAndReturnStateDiff =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useSimulateVmStopBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'stopBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useSimulateVmStopMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopPrank"`
 */
export const useSimulateVmStopPrank = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'stopPrank',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"store"`
 */
export const useSimulateVmStore = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'store',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"transact"`
 */
export const useSimulateVmTransact = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'transact',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useSimulateVmTryFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"txGasPrice"`
 */
export const useSimulateVmTxGasPrice = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'txGasPrice',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"unixTime"`
 */
export const useSimulateVmUnixTime = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"warp"`
 */
export const useSimulateVmWarp = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'warp',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFile"`
 */
export const useSimulateVmWriteFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useSimulateVmWriteFileBinary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeJson"`
 */
export const useSimulateVmWriteJson = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeLine"`
 */
export const useSimulateVmWriteLine = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const useReadVmSafe = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"addr"`
 */
export const useReadVmSafeAddr = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'addr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assume"`
 */
export const useReadVmSafeAssume = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'assume',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"computeCreate2Address"`
 */
export const useReadVmSafeComputeCreate2Address =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'computeCreate2Address',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"computeCreateAddress"`
 */
export const useReadVmSafeComputeCreateAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'computeCreateAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"deriveKey"`
 */
export const useReadVmSafeDeriveKey = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'deriveKey',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envAddress"`
 */
export const useReadVmSafeEnvAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBool"`
 */
export const useReadVmSafeEnvBool = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBytes"`
 */
export const useReadVmSafeEnvBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBytes32"`
 */
export const useReadVmSafeEnvBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envInt"`
 */
export const useReadVmSafeEnvInt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envOr"`
 */
export const useReadVmSafeEnvOr = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envString"`
 */
export const useReadVmSafeEnvString = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envUint"`
 */
export const useReadVmSafeEnvUint = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"fsMetadata"`
 */
export const useReadVmSafeFsMetadata = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'fsMetadata',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadVmSafeGetBlockNumber = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getBlockNumber',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getBlockTimestamp"`
 */
export const useReadVmSafeGetBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'getBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getCode"`
 */
export const useReadVmSafeGetCode = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getCode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getDeployedCode"`
 */
export const useReadVmSafeGetDeployedCode = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'getDeployedCode' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getLabel"`
 */
export const useReadVmSafeGetLabel = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useReadVmSafeGetNonce = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"keyExists"`
 */
export const useReadVmSafeKeyExists = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'keyExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"load"`
 */
export const useReadVmSafeLoad = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'load',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseAddress"`
 */
export const useReadVmSafeParseAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBool"`
 */
export const useReadVmSafeParseBool = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBytes"`
 */
export const useReadVmSafeParseBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBytes32"`
 */
export const useReadVmSafeParseBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseInt"`
 */
export const useReadVmSafeParseInt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJson"`
 */
export const useReadVmSafeParseJson = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJson',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonAddress"`
 */
export const useReadVmSafeParseJsonAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonAddressArray"`
 */
export const useReadVmSafeParseJsonAddressArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonAddressArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBool"`
 */
export const useReadVmSafeParseJsonBool = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBoolArray"`
 */
export const useReadVmSafeParseJsonBoolArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBoolArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes"`
 */
export const useReadVmSafeParseJsonBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes32"`
 */
export const useReadVmSafeParseJsonBytes32 =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBytes32',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes32Array"`
 */
export const useReadVmSafeParseJsonBytes32Array =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBytes32Array',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytesArray"`
 */
export const useReadVmSafeParseJsonBytesArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBytesArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonInt"`
 */
export const useReadVmSafeParseJsonInt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonIntArray"`
 */
export const useReadVmSafeParseJsonIntArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonIntArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonKeys"`
 */
export const useReadVmSafeParseJsonKeys = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonKeys',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonString"`
 */
export const useReadVmSafeParseJsonString = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'parseJsonString' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonStringArray"`
 */
export const useReadVmSafeParseJsonStringArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonStringArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonUint"`
 */
export const useReadVmSafeParseJsonUint = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonUintArray"`
 */
export const useReadVmSafeParseJsonUintArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonUintArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseUint"`
 */
export const useReadVmSafeParseUint = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"projectRoot"`
 */
export const useReadVmSafeProjectRoot = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'projectRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readDir"`
 */
export const useReadVmSafeReadDir = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readDir',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readFile"`
 */
export const useReadVmSafeReadFile = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readFile',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readFileBinary"`
 */
export const useReadVmSafeReadFileBinary = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readFileBinary',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readLine"`
 */
export const useReadVmSafeReadLine = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readLine',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readLink"`
 */
export const useReadVmSafeReadLink = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readLink',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrl"`
 */
export const useReadVmSafeRpcUrl = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrl',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrlStructs"`
 */
export const useReadVmSafeRpcUrlStructs = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrlStructs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrls"`
 */
export const useReadVmSafeRpcUrls = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useReadVmSafeSign = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"signP256"`
 */
export const useReadVmSafeSignP256 = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'signP256',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"toBase64"`
 */
export const useReadVmSafeToBase64 = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'toBase64',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"toBase64URL"`
 */
export const useReadVmSafeToBase64Url = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'toBase64URL',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"toString"`
 */
export const useReadVmSafeToString = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'toString',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const useWriteVmSafe = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"accesses"`
 */
export const useWriteVmSafeAccesses = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useWriteVmSafeBreakpoint = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"broadcast"`
 */
export const useWriteVmSafeBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"closeFile"`
 */
export const useWriteVmSafeCloseFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"copyFile"`
 */
export const useWriteVmSafeCopyFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createDir"`
 */
export const useWriteVmSafeCreateDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createWallet"`
 */
export const useWriteVmSafeCreateWallet = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'createWallet',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useWriteVmSafeEthGetLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"exists"`
 */
export const useWriteVmSafeExists = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"ffi"`
 */
export const useWriteVmSafeFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useWriteVmSafeGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useWriteVmSafeGetMappingLength =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useWriteVmSafeGetMappingSlotAt =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useWriteVmSafeGetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useWriteVmSafeGetRecordedLogs =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isDir"`
 */
export const useWriteVmSafeIsDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isFile"`
 */
export const useWriteVmSafeIsFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"label"`
 */
export const useWriteVmSafeLabel = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useWriteVmSafePauseGasMetering =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"record"`
 */
export const useWriteVmSafeRecord = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useWriteVmSafeRecordLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useWriteVmSafeRememberKey = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'rememberKey',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeDir"`
 */
export const useWriteVmSafeRemoveDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeFile"`
 */
export const useWriteVmSafeRemoveFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useWriteVmSafeResumeGasMetering =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpc"`
 */
export const useWriteVmSafeRpc = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useWriteVmSafeSerializeAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useWriteVmSafeSerializeBool = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'serializeBool' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useWriteVmSafeSerializeBytes =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useWriteVmSafeSerializeBytes32 =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useWriteVmSafeSerializeInt = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'serializeInt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useWriteVmSafeSerializeJson = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'serializeJson' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeString"`
 */
export const useWriteVmSafeSerializeString =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useWriteVmSafeSerializeUint = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'serializeUint' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"setEnv"`
 */
export const useWriteVmSafeSetEnv = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useWriteVmSafeSign = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sleep"`
 */
export const useWriteVmSafeSleep = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useWriteVmSafeStartBroadcast =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useWriteVmSafeStartMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useWriteVmSafeStartStateDiffRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useWriteVmSafeStopAndReturnStateDiff =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useWriteVmSafeStopBroadcast = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'stopBroadcast' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useWriteVmSafeStopMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useWriteVmSafeTryFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"unixTime"`
 */
export const useWriteVmSafeUnixTime = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFile"`
 */
export const useWriteVmSafeWriteFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useWriteVmSafeWriteFileBinary =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeJson"`
 */
export const useWriteVmSafeWriteJson = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeLine"`
 */
export const useWriteVmSafeWriteLine = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const useSimulateVmSafe = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"accesses"`
 */
export const useSimulateVmSafeAccesses =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'accesses',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useSimulateVmSafeBreakpoint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'breakpoint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"broadcast"`
 */
export const useSimulateVmSafeBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'broadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"closeFile"`
 */
export const useSimulateVmSafeCloseFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'closeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"copyFile"`
 */
export const useSimulateVmSafeCopyFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'copyFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createDir"`
 */
export const useSimulateVmSafeCreateDir =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'createDir',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createWallet"`
 */
export const useSimulateVmSafeCreateWallet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'createWallet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useSimulateVmSafeEthGetLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'eth_getLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"exists"`
 */
export const useSimulateVmSafeExists = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"ffi"`
 */
export const useSimulateVmSafeFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useSimulateVmSafeGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useSimulateVmSafeGetMappingLength =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useSimulateVmSafeGetMappingSlotAt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useSimulateVmSafeGetNonce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getNonce',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useSimulateVmSafeGetRecordedLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isDir"`
 */
export const useSimulateVmSafeIsDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isFile"`
 */
export const useSimulateVmSafeIsFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"label"`
 */
export const useSimulateVmSafeLabel = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useSimulateVmSafePauseGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"record"`
 */
export const useSimulateVmSafeRecord = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useSimulateVmSafeRecordLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'recordLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useSimulateVmSafeRememberKey =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'rememberKey',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeDir"`
 */
export const useSimulateVmSafeRemoveDir =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'removeDir',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeFile"`
 */
export const useSimulateVmSafeRemoveFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'removeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useSimulateVmSafeResumeGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpc"`
 */
export const useSimulateVmSafeRpc = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useSimulateVmSafeSerializeAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useSimulateVmSafeSerializeBool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeBool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useSimulateVmSafeSerializeBytes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useSimulateVmSafeSerializeBytes32 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useSimulateVmSafeSerializeInt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeInt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useSimulateVmSafeSerializeJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeString"`
 */
export const useSimulateVmSafeSerializeString =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useSimulateVmSafeSerializeUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"setEnv"`
 */
export const useSimulateVmSafeSetEnv = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useSimulateVmSafeSign = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sleep"`
 */
export const useSimulateVmSafeSleep = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useSimulateVmSafeStartBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useSimulateVmSafeStartMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useSimulateVmSafeStartStateDiffRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useSimulateVmSafeStopAndReturnStateDiff =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useSimulateVmSafeStopBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'stopBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useSimulateVmSafeStopMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useSimulateVmSafeTryFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"unixTime"`
 */
export const useSimulateVmSafeUnixTime =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'unixTime',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFile"`
 */
export const useSimulateVmSafeWriteFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useSimulateVmSafeWriteFileBinary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeJson"`
 */
export const useSimulateVmSafeWriteJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeLine"`
 */
export const useSimulateVmSafeWriteLine =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeLine',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__
 */
export const useReadStdError = /*#__PURE__*/ createUseReadContract({
  abi: stdErrorAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"arithmeticError"`
 */
export const useReadStdErrorArithmeticError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'arithmeticError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"assertionError"`
 */
export const useReadStdErrorAssertionError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'assertionError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"divisionError"`
 */
export const useReadStdErrorDivisionError = /*#__PURE__*/ createUseReadContract(
  { abi: stdErrorAbi, functionName: 'divisionError' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"encodeStorageError"`
 */
export const useReadStdErrorEncodeStorageError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'encodeStorageError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"enumConversionError"`
 */
export const useReadStdErrorEnumConversionError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'enumConversionError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"indexOOBError"`
 */
export const useReadStdErrorIndexOobError = /*#__PURE__*/ createUseReadContract(
  { abi: stdErrorAbi, functionName: 'indexOOBError' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"memOverflowError"`
 */
export const useReadStdErrorMemOverflowError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'memOverflowError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"popError"`
 */
export const useReadStdErrorPopError = /*#__PURE__*/ createUseReadContract({
  abi: stdErrorAbi,
  functionName: 'popError',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"zeroVarError"`
 */
export const useReadStdErrorZeroVarError = /*#__PURE__*/ createUseReadContract({
  abi: stdErrorAbi,
  functionName: 'zeroVarError',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__
 */
export const useWatchStdStorageSafeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: stdStorageSafeAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__ and `eventName` set to `"SlotFound"`
 */
export const useWatchStdStorageSafeSlotFoundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdStorageSafeAbi,
    eventName: 'SlotFound',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__ and `eventName` set to `"WARNING_UninitedSlot"`
 */
export const useWatchStdStorageSafeWarningUninitedSlotEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdStorageSafeAbi,
    eventName: 'WARNING_UninitedSlot',
  })

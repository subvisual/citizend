import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CtzndAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndAccessControlAbi = [
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
// CtzndAddress
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndAddressAbi = [
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
// CtzndBatch
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndBatchAbi = [
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
// CtzndCitizend
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndCitizendAbi = [
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
// CtzndCitizendConstructorTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndCitizendConstructorTestAbi = [
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
// CtzndController
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndControllerAbi = [
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
// CtzndDSTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndDsTestAbi = [
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
// CtzndDeployScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndDeployScriptAbi = [
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
// CtzndDevContributeScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndDevContributeScriptAbi = [
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
// CtzndDevDeployScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndDevDeployScriptAbi = [
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
// CtzndERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndErc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CtzndERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndErc20Abi = [
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
// CtzndERC20Burnable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndErc20BurnableAbi = [
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
// CtzndERC20Pausable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndErc20PausableAbi = [
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
// CtzndForkTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndForkTestAbi = [
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
// CtzndForkTestScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndForkTestScriptAbi = [
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
// CtzndFractalRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndFractalRegistryAbi = [
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
// CtzndIAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIAccessControlAbi = [
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
// CtzndIBatch
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIBatchAbi = [
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
// CtzndIController
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIControllerAbi = [
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
// CtzndIERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIerc1155ErrorsAbi = [
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
// CtzndIERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIerc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CtzndIERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIerc20ErrorsAbi = [
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
// CtzndIERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIerc20MetadataAbi = [
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
// CtzndIERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIerc20PermitAbi = [
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
// CtzndIERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIerc721ErrorsAbi = [
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
// CtzndIERC721TokenReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIerc721TokenReceiverAbi = [
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
// CtzndIMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIMulticall3Abi = [
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
// CtzndIPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIPoolAbi = [
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
// CtzndIProject
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIProjectAbi = [
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
// CtzndISale
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndISaleAbi = [
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
// CtzndIStaking
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIStakingAbi = [
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
// CtzndIVesting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndIVestingAbi = [
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
// CtzndMerkleProof
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndMerkleProofAbi = [
  { type: 'error', inputs: [], name: 'MerkleProofInvalidMultiproof' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CtzndMockERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndMockErc721Abi = [
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
// CtzndMockProject
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndMockProjectAbi = [
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
// CtzndMockSale
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndMockSaleAbi = [
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
// CtzndOverMaxTargetDevDeployScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndOverMaxTargetDevDeployScriptAbi = [
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
// CtzndPausable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndPausableAbi = [
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
// CtzndPeoplesPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndPeoplesPoolAbi = [
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
// CtzndPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndPoolAbi = [
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
// CtzndProject
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndProjectAbi = [
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
// CtzndProjectHelpers
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndProjectHelpersAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'MUL',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CtzndProjectTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndProjectTestAbi = [
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
// CtzndProjectVoting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndProjectVotingAbi = [
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
// CtzndReentrancyGuard
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndReentrancyGuardAbi = [
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CtzndRefundScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndRefundScriptAbi = [
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
// CtzndRefundTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndRefundTestAbi = [
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
    name: 'test_RefundAll',
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
// CtzndRisingTide
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndRisingTideAbi = [
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
// CtzndRisingTideTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndRisingTideTestAbi = [
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
// CtzndSafeERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndSafeErc20Abi = [
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
// CtzndSale
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const ctzndSaleAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_paymentToken', internalType: 'address', type: 'address' },
      { name: '_rate', internalType: 'uint256', type: 'uint256' },
      { name: '_start', internalType: 'uint256', type: 'uint256' },
      { name: '_end', internalType: 'uint256', type: 'uint256' },
      { name: '_minTokensForSale', internalType: 'uint256', type: 'uint256' },
      { name: '_maxTokensForSale', internalType: 'uint256', type: 'uint256' },
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
    name: 'maxTokensForSale',
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
    name: 'minTokensForSale',
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
    inputs: [
      { name: '_endRegistration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setEndRegistration',
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
    inputs: [
      { name: '_startRegistration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setStartRegistration',
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
  { type: 'error', inputs: [], name: 'MaxContributorsReached' },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const ctzndSaleAddress = {
  1: '0x733e41e5a08C6d922eDdAef715186d7E97D55C50',
  31337: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  42161: '0x85b34Aa54fdf8242e4656eA50b711F45340925bC',
  421614: '0x067126cE81FA5a2AE8d7A3dAFD01C6E8C0764560',
  11155111: '0x3b11B3bC2eF9A24A1a1faE9D80127F44386e3F7d',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const ctzndSaleConfig = {
  address: ctzndSaleAddress,
  abi: ctzndSaleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CtzndSaleMaxTargetNotReachedTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndSaleMaxTargetNotReachedTestAbi = [
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
    name: 'test_AllocationAfterMaxTargetReached',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_BuyRevertsWhenMaxTargetReached',
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
// CtzndSaleMaxTargetReachedTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndSaleMaxTargetReachedTestAbi = [
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
    name: 'test_AllocationAfterMaxTargetReached',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_BuyRevertsWhenMaxTargetReached',
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
// CtzndSaleMinTargetNotReachedDevDeployScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndSaleMinTargetNotReachedDevDeployScriptAbi = [
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
// CtzndSaleMinTargetNotReachedTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndSaleMinTargetNotReachedTestAbi = [
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
    name: 'test_AllocationWhenMinTargetReached',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_RefundsWhenMinTargetNotReached',
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
// CtzndSaleTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndSaleTestAbi = [
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
// CtzndScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndScriptAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CtzndSetCapScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndSetCapScriptAbi = [
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
// CtzndStakersPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndStakersPoolAbi = [
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
// CtzndStaking
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndStakingAbi = [
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
// CtzndStdAssertions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndStdAssertionsAbi = [
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
// CtzndStdInvariant
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndStdInvariantAbi = [
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
// CtzndTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndTestAbi = [
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
// CtzndTestPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndTestPoolAbi = [
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
// CtzndTestProjectVoting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndTestProjectVotingAbi = [
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
// CtzndTestRisingTideWithCustomAmounts
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndTestRisingTideWithCustomAmountsAbi = [
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
// CtzndTestRisingTideWithStaticAmounts
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndTestRisingTideWithStaticAmountsAbi = [
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
// CtzndVesting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndVestingAbi = [
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
// CtzndVm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndVmAbi = [
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
// CtzndVmSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndVmSafeAbi = [
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
// CtzndstdError
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndstdErrorAbi = [
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
// CtzndstdStorageSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ctzndstdStorageSafeAbi = [
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__
 */
export const useReadCtzndAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: ctzndAccessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadCtzndAccessControlDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndAccessControlAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadCtzndAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndAccessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadCtzndAccessControlHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndAccessControlAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCtzndAccessControlSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndAccessControlAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__
 */
export const useWriteCtzndAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndAccessControlAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteCtzndAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteCtzndAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteCtzndAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__
 */
export const useSimulateCtzndAccessControl =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndAccessControlAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateCtzndAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateCtzndAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateCtzndAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndAccessControlAbi}__
 */
export const useWatchCtzndAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndAccessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchCtzndAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndAccessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchCtzndAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndAccessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchCtzndAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndAccessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__
 */
export const useReadCtzndBatch = /*#__PURE__*/ createUseReadContract({
  abi: ctzndBatchAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"controller"`
 */
export const useReadCtzndBatchController = /*#__PURE__*/ createUseReadContract({
  abi: ctzndBatchAbi,
  functionName: 'controller',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"getCurrentWinners"`
 */
export const useReadCtzndBatchGetCurrentWinners =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'getCurrentWinners',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"getProjectStatus"`
 */
export const useReadCtzndBatchGetProjectStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'getProjectStatus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"hasVotedForProject"`
 */
export const useReadCtzndBatchHasVotedForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'hasVotedForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"inInvestmentPeriod"`
 */
export const useReadCtzndBatchInInvestmentPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'inInvestmentPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"investmentEnd"`
 */
export const useReadCtzndBatchInvestmentEnd =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'investmentEnd',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"projectToVotesIndex"`
 */
export const useReadCtzndBatchProjectToVotesIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'projectToVotesIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"projectVoteCount"`
 */
export const useReadCtzndBatchProjectVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'projectVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"projectVoting_finalBonus"`
 */
export const useReadCtzndBatchProjectVotingFinalBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'projectVoting_finalBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"projectVoting_initialBonus"`
 */
export const useReadCtzndBatchProjectVotingInitialBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'projectVoting_initialBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"projectVoting_projects"`
 */
export const useReadCtzndBatchProjectVotingProjects =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'projectVoting_projects',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"projectVoting_singleSlotDuration"`
 */
export const useReadCtzndBatchProjectVotingSingleSlotDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'projectVoting_singleSlotDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"projectVoting_voteLimitPerUser"`
 */
export const useReadCtzndBatchProjectVotingVoteLimitPerUser =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'projectVoting_voteLimitPerUser',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"projectVoting_votingPeriod"`
 */
export const useReadCtzndBatchProjectVotingVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'projectVoting_votingPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"projects"`
 */
export const useReadCtzndBatchProjects = /*#__PURE__*/ createUseReadContract({
  abi: ctzndBatchAbi,
  functionName: 'projects',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"singleSlotDuration"`
 */
export const useReadCtzndBatchSingleSlotDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'singleSlotDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"slotCount"`
 */
export const useReadCtzndBatchSlotCount = /*#__PURE__*/ createUseReadContract({
  abi: ctzndBatchAbi,
  functionName: 'slotCount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"userHasVotedForProject"`
 */
export const useReadCtzndBatchUserHasVotedForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'userHasVotedForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"userVoteCount"`
 */
export const useReadCtzndBatchUserVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'userVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"votes"`
 */
export const useReadCtzndBatchVotes = /*#__PURE__*/ createUseReadContract({
  abi: ctzndBatchAbi,
  functionName: 'votes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"votesIndexToProject"`
 */
export const useReadCtzndBatchVotesIndexToProject =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'votesIndexToProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const useReadCtzndBatchVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"weightedProjectVoteCount"`
 */
export const useReadCtzndBatchWeightedProjectVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndBatchAbi,
    functionName: 'weightedProjectVoteCount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndBatchAbi}__
 */
export const useWriteCtzndBatch = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndBatchAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"setVotingPeriod"`
 */
export const useWriteCtzndBatchSetVotingPeriod =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndBatchAbi,
    functionName: 'setVotingPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"vote"`
 */
export const useWriteCtzndBatchVote = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndBatchAbi,
  functionName: 'vote',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndBatchAbi}__
 */
export const useSimulateCtzndBatch = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndBatchAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"setVotingPeriod"`
 */
export const useSimulateCtzndBatchSetVotingPeriod =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndBatchAbi,
    functionName: 'setVotingPeriod',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndBatchAbi}__ and `functionName` set to `"vote"`
 */
export const useSimulateCtzndBatchVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndBatchAbi,
    functionName: 'vote',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__
 */
export const useReadCtzndCitizend = /*#__PURE__*/ createUseReadContract({
  abi: ctzndCitizendAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadCtzndCitizendDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"PAUSER_ROLE"`
 */
export const useReadCtzndCitizendPauserRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendAbi,
    functionName: 'PAUSER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadCtzndCitizendAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadCtzndCitizendBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadCtzndCitizendDecimals = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndCitizendAbi, functionName: 'decimals' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadCtzndCitizendGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadCtzndCitizendHasRole = /*#__PURE__*/ createUseReadContract({
  abi: ctzndCitizendAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"lockEnd"`
 */
export const useReadCtzndCitizendLockEnd = /*#__PURE__*/ createUseReadContract({
  abi: ctzndCitizendAbi,
  functionName: 'lockEnd',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"name"`
 */
export const useReadCtzndCitizendName = /*#__PURE__*/ createUseReadContract({
  abi: ctzndCitizendAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"paused"`
 */
export const useReadCtzndCitizendPaused = /*#__PURE__*/ createUseReadContract({
  abi: ctzndCitizendAbi,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCtzndCitizendSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadCtzndCitizendSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ctzndCitizendAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadCtzndCitizendTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__
 */
export const useWriteCtzndCitizend = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndCitizendAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteCtzndCitizendApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteCtzndCitizendBurn = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndCitizendAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useWriteCtzndCitizendBurnFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteCtzndCitizendGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"pause"`
 */
export const useWriteCtzndCitizendPause = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndCitizendAbi,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteCtzndCitizendRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteCtzndCitizendRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteCtzndCitizendTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteCtzndCitizendTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"unpause"`
 */
export const useWriteCtzndCitizendUnpause =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendAbi,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"unpausePublic"`
 */
export const useWriteCtzndCitizendUnpausePublic =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendAbi,
    functionName: 'unpausePublic',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__
 */
export const useSimulateCtzndCitizend = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndCitizendAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateCtzndCitizendApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateCtzndCitizendBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useSimulateCtzndCitizendBurnFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateCtzndCitizendGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"pause"`
 */
export const useSimulateCtzndCitizendPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendAbi,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateCtzndCitizendRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateCtzndCitizendRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateCtzndCitizendTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateCtzndCitizendTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"unpause"`
 */
export const useSimulateCtzndCitizendUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendAbi,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `functionName` set to `"unpausePublic"`
 */
export const useSimulateCtzndCitizendUnpausePublic =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendAbi,
    functionName: 'unpausePublic',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendAbi}__
 */
export const useWatchCtzndCitizendEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndCitizendAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchCtzndCitizendApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchCtzndCitizendPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchCtzndCitizendRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchCtzndCitizendRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchCtzndCitizendRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchCtzndCitizendTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchCtzndCitizendUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__
 */
export const useReadCtzndCitizendConstructorTest =
  /*#__PURE__*/ createUseReadContract({ abi: ctzndCitizendConstructorTestAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCtzndCitizendConstructorTestIsTest =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'IS_TEST',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadCtzndCitizendConstructorTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadCtzndCitizendConstructorTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadCtzndCitizendConstructorTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadCtzndCitizendConstructorTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadCtzndCitizendConstructorTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadCtzndCitizendConstructorTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadCtzndCitizendConstructorTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadCtzndCitizendConstructorTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadCtzndCitizendConstructorTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__
 */
export const useWriteCtzndCitizendConstructorTest =
  /*#__PURE__*/ createUseWriteContract({ abi: ctzndCitizendConstructorTestAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCtzndCitizendConstructorTestFailed =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"testInitialMint"`
 */
export const useWriteCtzndCitizendConstructorTestTestInitialMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'testInitialMint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"testSetsCorrectParameters"`
 */
export const useWriteCtzndCitizendConstructorTestTestSetsCorrectParameters =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'testSetsCorrectParameters',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__
 */
export const useSimulateCtzndCitizendConstructorTest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendConstructorTestAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCtzndCitizendConstructorTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"testInitialMint"`
 */
export const useSimulateCtzndCitizendConstructorTestTestInitialMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'testInitialMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `functionName` set to `"testSetsCorrectParameters"`
 */
export const useSimulateCtzndCitizendConstructorTestTestSetsCorrectParameters =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndCitizendConstructorTestAbi,
    functionName: 'testSetsCorrectParameters',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__
 */
export const useWatchCtzndCitizendConstructorTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCtzndCitizendConstructorTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCtzndCitizendConstructorTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchCtzndCitizendConstructorTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCtzndCitizendConstructorTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCtzndCitizendConstructorTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCtzndCitizendConstructorTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCtzndCitizendConstructorTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchCtzndCitizendConstructorTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCtzndCitizendConstructorTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCtzndCitizendConstructorTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCtzndCitizendConstructorTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCtzndCitizendConstructorTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCtzndCitizendConstructorTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCtzndCitizendConstructorTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCtzndCitizendConstructorTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCtzndCitizendConstructorTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCtzndCitizendConstructorTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndCitizendConstructorTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCtzndCitizendConstructorTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndCitizendConstructorTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__
 */
export const useReadCtzndController = /*#__PURE__*/ createUseReadContract({
  abi: ctzndControllerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"BATCH_MANAGER_ROLE"`
 */
export const useReadCtzndControllerBatchManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'BATCH_MANAGER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadCtzndControllerDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"LEGAL_MANAGER_ROLE"`
 */
export const useReadCtzndControllerLegalManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'LEGAL_MANAGER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"PROJECT_MANAGER_ROLE"`
 */
export const useReadCtzndControllerProjectManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'PROJECT_MANAGER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"canInvestInPeoplesPool"`
 */
export const useReadCtzndControllerCanInvestInPeoplesPool =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'canInvestInPeoplesPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"canInvestInStakersPool"`
 */
export const useReadCtzndControllerCanInvestInStakersPool =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'canInvestInStakersPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"canVote"`
 */
export const useReadCtzndControllerCanVote =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'canVote',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"getBatchForProject"`
 */
export const useReadCtzndControllerGetBatchForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'getBatchForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadCtzndControllerGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"hasBatchManagerRole"`
 */
export const useReadCtzndControllerHasBatchManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'hasBatchManagerRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"hasLegalManagerRole"`
 */
export const useReadCtzndControllerHasLegalManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'hasLegalManagerRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"hasProjectManagerRole"`
 */
export const useReadCtzndControllerHasProjectManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'hasProjectManagerRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadCtzndControllerHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"isProjectInBatch"`
 */
export const useReadCtzndControllerIsProjectInBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'isProjectInBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"merkleRoot"`
 */
export const useReadCtzndControllerMerkleRoot =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'merkleRoot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"projects"`
 */
export const useReadCtzndControllerProjects =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'projects',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"projectsToBatches"`
 */
export const useReadCtzndControllerProjectsToBatches =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'projectsToBatches',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"staking"`
 */
export const useReadCtzndControllerStaking =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'staking',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCtzndControllerSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndControllerAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"token"`
 */
export const useReadCtzndControllerToken = /*#__PURE__*/ createUseReadContract({
  abi: ctzndControllerAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndControllerAbi}__
 */
export const useWriteCtzndController = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndControllerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"createBatch"`
 */
export const useWriteCtzndControllerCreateBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndControllerAbi,
    functionName: 'createBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteCtzndControllerGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndControllerAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"registerProject"`
 */
export const useWriteCtzndControllerRegisterProject =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndControllerAbi,
    functionName: 'registerProject',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteCtzndControllerRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndControllerAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteCtzndControllerRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndControllerAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"setBatchVotingPeriod"`
 */
export const useWriteCtzndControllerSetBatchVotingPeriod =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndControllerAbi,
    functionName: 'setBatchVotingPeriod',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndControllerAbi}__
 */
export const useSimulateCtzndController =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndControllerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"createBatch"`
 */
export const useSimulateCtzndControllerCreateBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndControllerAbi,
    functionName: 'createBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateCtzndControllerGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndControllerAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"registerProject"`
 */
export const useSimulateCtzndControllerRegisterProject =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndControllerAbi,
    functionName: 'registerProject',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateCtzndControllerRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndControllerAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateCtzndControllerRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndControllerAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndControllerAbi}__ and `functionName` set to `"setBatchVotingPeriod"`
 */
export const useSimulateCtzndControllerSetBatchVotingPeriod =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndControllerAbi,
    functionName: 'setBatchVotingPeriod',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndControllerAbi}__
 */
export const useWatchCtzndControllerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndControllerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndControllerAbi}__ and `eventName` set to `"BatchCreated"`
 */
export const useWatchCtzndControllerBatchCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndControllerAbi,
    eventName: 'BatchCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndControllerAbi}__ and `eventName` set to `"ProjectRegistered"`
 */
export const useWatchCtzndControllerProjectRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndControllerAbi,
    eventName: 'ProjectRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndControllerAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchCtzndControllerRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndControllerAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndControllerAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchCtzndControllerRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndControllerAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndControllerAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchCtzndControllerRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndControllerAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndDsTestAbi}__
 */
export const useReadCtzndDsTest = /*#__PURE__*/ createUseReadContract({
  abi: ctzndDsTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCtzndDsTestIsTest = /*#__PURE__*/ createUseReadContract({
  abi: ctzndDsTestAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndDsTestAbi}__
 */
export const useWriteCtzndDsTest = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndDsTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCtzndDsTestFailed = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndDsTestAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndDsTestAbi}__
 */
export const useSimulateCtzndDsTest = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndDsTestAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCtzndDsTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndDsTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__
 */
export const useWatchCtzndDsTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndDsTestAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCtzndDsTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCtzndDsTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCtzndDsTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCtzndDsTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCtzndDsTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCtzndDsTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCtzndDsTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCtzndDsTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCtzndDsTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCtzndDsTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCtzndDsTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCtzndDsTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCtzndDsTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCtzndDsTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCtzndDsTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndDsTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCtzndDsTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndDsTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndDeployScriptAbi}__
 */
export const useReadCtzndDeployScript = /*#__PURE__*/ createUseReadContract({
  abi: ctzndDeployScriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndDeployScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadCtzndDeployScriptIsScript =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndDeployScriptAbi,
    functionName: 'IS_SCRIPT',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndDeployScriptAbi}__
 */
export const useWriteCtzndDeployScript = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndDeployScriptAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndDeployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteCtzndDeployScriptRun =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndDeployScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndDeployScriptAbi}__
 */
export const useSimulateCtzndDeployScript =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndDeployScriptAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndDeployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateCtzndDeployScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndDeployScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndDevContributeScriptAbi}__
 */
export const useReadCtzndDevContributeScript =
  /*#__PURE__*/ createUseReadContract({ abi: ctzndDevContributeScriptAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndDevContributeScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadCtzndDevContributeScriptIsScript =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndDevContributeScriptAbi,
    functionName: 'IS_SCRIPT',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndDevContributeScriptAbi}__
 */
export const useWriteCtzndDevContributeScript =
  /*#__PURE__*/ createUseWriteContract({ abi: ctzndDevContributeScriptAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndDevContributeScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteCtzndDevContributeScriptRun =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndDevContributeScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndDevContributeScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteCtzndDevContributeScriptSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndDevContributeScriptAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndDevContributeScriptAbi}__
 */
export const useSimulateCtzndDevContributeScript =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndDevContributeScriptAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndDevContributeScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateCtzndDevContributeScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndDevContributeScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndDevContributeScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateCtzndDevContributeScriptSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndDevContributeScriptAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndDevDeployScriptAbi}__
 */
export const useReadCtzndDevDeployScript = /*#__PURE__*/ createUseReadContract({
  abi: ctzndDevDeployScriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndDevDeployScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadCtzndDevDeployScriptIsScript =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndDevDeployScriptAbi,
    functionName: 'IS_SCRIPT',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndDevDeployScriptAbi}__
 */
export const useWriteCtzndDevDeployScript =
  /*#__PURE__*/ createUseWriteContract({ abi: ctzndDevDeployScriptAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndDevDeployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteCtzndDevDeployScriptRun =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndDevDeployScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndDevDeployScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteCtzndDevDeployScriptSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndDevDeployScriptAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndDevDeployScriptAbi}__
 */
export const useSimulateCtzndDevDeployScript =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndDevDeployScriptAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndDevDeployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateCtzndDevDeployScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndDevDeployScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndDevDeployScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateCtzndDevDeployScriptSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndDevDeployScriptAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc165Abi}__
 */
export const useReadCtzndErc165 = /*#__PURE__*/ createUseReadContract({
  abi: ctzndErc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCtzndErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20Abi}__
 */
export const useReadCtzndErc20 = /*#__PURE__*/ createUseReadContract({
  abi: ctzndErc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadCtzndErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: ctzndErc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadCtzndErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ctzndErc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadCtzndErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: ctzndErc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadCtzndErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: ctzndErc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadCtzndErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: ctzndErc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadCtzndErc20TotalSupply = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndErc20Abi, functionName: 'totalSupply' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20Abi}__
 */
export const useWriteCtzndErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndErc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteCtzndErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndErc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteCtzndErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndErc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteCtzndErc20TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndErc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20Abi}__
 */
export const useSimulateCtzndErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndErc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateCtzndErc20Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndErc20Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateCtzndErc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndErc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateCtzndErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndErc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndErc20Abi}__
 */
export const useWatchCtzndErc20Event =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndErc20Abi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndErc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchCtzndErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndErc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndErc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchCtzndErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndErc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__
 */
export const useReadCtzndErc20Burnable = /*#__PURE__*/ createUseReadContract({
  abi: ctzndErc20BurnableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadCtzndErc20BurnableAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadCtzndErc20BurnableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadCtzndErc20BurnableDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"name"`
 */
export const useReadCtzndErc20BurnableName =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'name',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadCtzndErc20BurnableSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadCtzndErc20BurnableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__
 */
export const useWriteCtzndErc20Burnable = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndErc20BurnableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteCtzndErc20BurnableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteCtzndErc20BurnableBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useWriteCtzndErc20BurnableBurnFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteCtzndErc20BurnableTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteCtzndErc20BurnableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__
 */
export const useSimulateCtzndErc20Burnable =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndErc20BurnableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateCtzndErc20BurnableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateCtzndErc20BurnableBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useSimulateCtzndErc20BurnableBurnFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateCtzndErc20BurnableTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateCtzndErc20BurnableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndErc20BurnableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__
 */
export const useWatchCtzndErc20BurnableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndErc20BurnableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchCtzndErc20BurnableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndErc20BurnableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndErc20BurnableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchCtzndErc20BurnableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndErc20BurnableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__
 */
export const useReadCtzndErc20Pausable = /*#__PURE__*/ createUseReadContract({
  abi: ctzndErc20PausableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadCtzndErc20PausableAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadCtzndErc20PausableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadCtzndErc20PausableDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"name"`
 */
export const useReadCtzndErc20PausableName =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'name',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"paused"`
 */
export const useReadCtzndErc20PausablePaused =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'paused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadCtzndErc20PausableSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadCtzndErc20PausableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__
 */
export const useWriteCtzndErc20Pausable = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndErc20PausableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteCtzndErc20PausableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteCtzndErc20PausableTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteCtzndErc20PausableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__
 */
export const useSimulateCtzndErc20Pausable =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndErc20PausableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateCtzndErc20PausableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateCtzndErc20PausableTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateCtzndErc20PausableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndErc20PausableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndErc20PausableAbi}__
 */
export const useWatchCtzndErc20PausableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndErc20PausableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchCtzndErc20PausableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndErc20PausableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchCtzndErc20PausablePausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndErc20PausableAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchCtzndErc20PausableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndErc20PausableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndErc20PausableAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchCtzndErc20PausableUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndErc20PausableAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndForkTestAbi}__
 */
export const useReadCtzndForkTest = /*#__PURE__*/ createUseReadContract({
  abi: ctzndForkTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndForkTestAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadCtzndForkTestIsScript = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndForkTestAbi, functionName: 'IS_SCRIPT' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndForkTestAbi}__
 */
export const useWriteCtzndForkTest = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndForkTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndForkTestAbi}__ and `functionName` set to `"run"`
 */
export const useWriteCtzndForkTestRun = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndForkTestAbi,
  functionName: 'run',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndForkTestAbi}__
 */
export const useSimulateCtzndForkTest = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndForkTestAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndForkTestAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateCtzndForkTestRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndForkTestAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndForkTestScriptAbi}__
 */
export const useReadCtzndForkTestScript = /*#__PURE__*/ createUseReadContract({
  abi: ctzndForkTestScriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndForkTestScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadCtzndForkTestScriptIsScript =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndForkTestScriptAbi,
    functionName: 'IS_SCRIPT',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndForkTestScriptAbi}__
 */
export const useWriteCtzndForkTestScript = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndForkTestScriptAbi },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndForkTestScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteCtzndForkTestScriptRun =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndForkTestScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndForkTestScriptAbi}__
 */
export const useSimulateCtzndForkTestScript =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndForkTestScriptAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndForkTestScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateCtzndForkTestScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndForkTestScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__
 */
export const useReadCtzndFractalRegistry = /*#__PURE__*/ createUseReadContract({
  abi: ctzndFractalRegistryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"delegates"`
 */
export const useReadCtzndFractalRegistryDelegates =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'delegates',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"getFractalId"`
 */
export const useReadCtzndFractalRegistryGetFractalId =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'getFractalId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"isUserInList"`
 */
export const useReadCtzndFractalRegistryIsUserInList =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'isUserInList',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__
 */
export const useWriteCtzndFractalRegistry =
  /*#__PURE__*/ createUseWriteContract({ abi: ctzndFractalRegistryAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"addDelegate"`
 */
export const useWriteCtzndFractalRegistryAddDelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'addDelegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"addUserAddress"`
 */
export const useWriteCtzndFractalRegistryAddUserAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'addUserAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"addUserToList"`
 */
export const useWriteCtzndFractalRegistryAddUserToList =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'addUserToList',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"removeDelegate"`
 */
export const useWriteCtzndFractalRegistryRemoveDelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'removeDelegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"removeUserAddress"`
 */
export const useWriteCtzndFractalRegistryRemoveUserAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'removeUserAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"removeUserFromList"`
 */
export const useWriteCtzndFractalRegistryRemoveUserFromList =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'removeUserFromList',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__
 */
export const useSimulateCtzndFractalRegistry =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndFractalRegistryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"addDelegate"`
 */
export const useSimulateCtzndFractalRegistryAddDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'addDelegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"addUserAddress"`
 */
export const useSimulateCtzndFractalRegistryAddUserAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'addUserAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"addUserToList"`
 */
export const useSimulateCtzndFractalRegistryAddUserToList =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'addUserToList',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"removeDelegate"`
 */
export const useSimulateCtzndFractalRegistryRemoveDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'removeDelegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"removeUserAddress"`
 */
export const useSimulateCtzndFractalRegistryRemoveUserAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'removeUserAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndFractalRegistryAbi}__ and `functionName` set to `"removeUserFromList"`
 */
export const useSimulateCtzndFractalRegistryRemoveUserFromList =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndFractalRegistryAbi,
    functionName: 'removeUserFromList',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIAccessControlAbi}__
 */
export const useReadCtzndIAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIAccessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadCtzndIAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIAccessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadCtzndIAccessControlHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIAccessControlAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIAccessControlAbi}__
 */
export const useWriteCtzndIAccessControl = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndIAccessControlAbi },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteCtzndIAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteCtzndIAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteCtzndIAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIAccessControlAbi}__
 */
export const useSimulateCtzndIAccessControl =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndIAccessControlAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateCtzndIAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateCtzndIAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateCtzndIAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndIAccessControlAbi}__
 */
export const useWatchCtzndIAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndIAccessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndIAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchCtzndIAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndIAccessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndIAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchCtzndIAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndIAccessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndIAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchCtzndIAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndIAccessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIBatchAbi}__
 */
export const useWriteCtzndIBatch = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIBatchAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIBatchAbi}__ and `functionName` set to `"vote"`
 */
export const useWriteCtzndIBatchVote = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIBatchAbi,
  functionName: 'vote',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIBatchAbi}__
 */
export const useSimulateCtzndIBatch = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndIBatchAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIBatchAbi}__ and `functionName` set to `"vote"`
 */
export const useSimulateCtzndIBatchVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIBatchAbi,
    functionName: 'vote',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIControllerAbi}__
 */
export const useReadCtzndIController = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIControllerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"canInvestInPeoplesPool"`
 */
export const useReadCtzndIControllerCanInvestInPeoplesPool =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIControllerAbi,
    functionName: 'canInvestInPeoplesPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"canInvestInStakersPool"`
 */
export const useReadCtzndIControllerCanInvestInStakersPool =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIControllerAbi,
    functionName: 'canInvestInStakersPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"canVote"`
 */
export const useReadCtzndIControllerCanVote =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIControllerAbi,
    functionName: 'canVote',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"getBatchForProject"`
 */
export const useReadCtzndIControllerGetBatchForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIControllerAbi,
    functionName: 'getBatchForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"hasLegalManagerRole"`
 */
export const useReadCtzndIControllerHasLegalManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIControllerAbi,
    functionName: 'hasLegalManagerRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"hasProjectManagerRole"`
 */
export const useReadCtzndIControllerHasProjectManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIControllerAbi,
    functionName: 'hasProjectManagerRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIControllerAbi}__
 */
export const useWriteCtzndIController = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIControllerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"createBatch"`
 */
export const useWriteCtzndIControllerCreateBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIControllerAbi,
    functionName: 'createBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"isProjectInBatch"`
 */
export const useWriteCtzndIControllerIsProjectInBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIControllerAbi,
    functionName: 'isProjectInBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"registerProject"`
 */
export const useWriteCtzndIControllerRegisterProject =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIControllerAbi,
    functionName: 'registerProject',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"setBatchVotingPeriod"`
 */
export const useWriteCtzndIControllerSetBatchVotingPeriod =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIControllerAbi,
    functionName: 'setBatchVotingPeriod',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIControllerAbi}__
 */
export const useSimulateCtzndIController =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndIControllerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"createBatch"`
 */
export const useSimulateCtzndIControllerCreateBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIControllerAbi,
    functionName: 'createBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"isProjectInBatch"`
 */
export const useSimulateCtzndIControllerIsProjectInBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIControllerAbi,
    functionName: 'isProjectInBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"registerProject"`
 */
export const useSimulateCtzndIControllerRegisterProject =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIControllerAbi,
    functionName: 'registerProject',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIControllerAbi}__ and `functionName` set to `"setBatchVotingPeriod"`
 */
export const useSimulateCtzndIControllerSetBatchVotingPeriod =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIControllerAbi,
    functionName: 'setBatchVotingPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc165Abi}__
 */
export const useReadCtzndIerc165 = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIerc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCtzndIerc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIerc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__
 */
export const useReadCtzndIerc20Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIerc20MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadCtzndIerc20MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadCtzndIerc20MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadCtzndIerc20MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadCtzndIerc20MetadataName =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'name',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadCtzndIerc20MetadataSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadCtzndIerc20MetadataTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__
 */
export const useWriteCtzndIerc20Metadata = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndIerc20MetadataAbi },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteCtzndIerc20MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteCtzndIerc20MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteCtzndIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__
 */
export const useSimulateCtzndIerc20Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndIerc20MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateCtzndIerc20MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateCtzndIerc20MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateCtzndIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIerc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__
 */
export const useWatchCtzndIerc20MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndIerc20MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchCtzndIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndIerc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndIerc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchCtzndIerc20MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndIerc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc20PermitAbi}__
 */
export const useReadCtzndIerc20Permit = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIerc20PermitAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadCtzndIerc20PermitDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIerc20PermitAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIerc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadCtzndIerc20PermitNonces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIerc20PermitAbi,
    functionName: 'nonces',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIerc20PermitAbi}__
 */
export const useWriteCtzndIerc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIerc20PermitAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIerc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteCtzndIerc20PermitPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIerc20PermitAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIerc20PermitAbi}__
 */
export const useSimulateCtzndIerc20Permit =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndIerc20PermitAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIerc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateCtzndIerc20PermitPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIerc20PermitAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIerc721TokenReceiverAbi}__
 */
export const useWriteCtzndIerc721TokenReceiver =
  /*#__PURE__*/ createUseWriteContract({ abi: ctzndIerc721TokenReceiverAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIerc721TokenReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteCtzndIerc721TokenReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIerc721TokenReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIerc721TokenReceiverAbi}__
 */
export const useSimulateCtzndIerc721TokenReceiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndIerc721TokenReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIerc721TokenReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateCtzndIerc721TokenReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIerc721TokenReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__
 */
export const useReadCtzndIMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadCtzndIMulticall3GetBasefee =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'getBasefee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadCtzndIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadCtzndIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadCtzndIMulticall3GetChainId =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'getChainId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadCtzndIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadCtzndIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadCtzndIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadCtzndIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadCtzndIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadCtzndIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__
 */
export const useWriteCtzndIMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIMulticall3Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteCtzndIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteCtzndIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteCtzndIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteCtzndIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteCtzndIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteCtzndIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__
 */
export const useSimulateCtzndIMulticall3 =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndIMulticall3Abi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateCtzndIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateCtzndIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateCtzndIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateCtzndIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateCtzndIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateCtzndIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIPoolAbi}__
 */
export const useReadCtzndIPool = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIPoolAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadCtzndIPoolAllocation = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIPoolAbi,
  functionName: 'allocation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIPoolAbi}__ and `functionName` set to `"refundableAmount"`
 */
export const useReadCtzndIPoolRefundableAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIPoolAbi,
    functionName: 'refundableAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIPoolAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadCtzndIPoolUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIPoolAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIPoolAbi}__
 */
export const useWriteCtzndIPool = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteCtzndIPoolInvest = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIPoolAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteCtzndIPoolRefund = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIPoolAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWriteCtzndIPoolSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIPoolAbi}__
 */
export const useSimulateCtzndIPool = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndIPoolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateCtzndIPoolInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIPoolAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateCtzndIPoolRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIPoolAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulateCtzndIPoolSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIProjectAbi}__
 */
export const useReadCtzndIProject = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIProjectAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"approvedByLegal"`
 */
export const useReadCtzndIProjectApprovedByLegal =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIProjectAbi,
    functionName: 'approvedByLegal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"approvedByManager"`
 */
export const useReadCtzndIProjectApprovedByManager =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIProjectAbi,
    functionName: 'approvedByManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"hasTokens"`
 */
export const useReadCtzndIProjectHasTokens =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIProjectAbi,
    functionName: 'hasTokens',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"investmentTokenToToken"`
 */
export const useReadCtzndIProjectInvestmentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIProjectAbi,
    functionName: 'investmentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"isReadyForListing"`
 */
export const useReadCtzndIProjectIsReadyForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIProjectAbi,
    functionName: 'isReadyForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"peoplesPool"`
 */
export const useReadCtzndIProjectPeoplesPool =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIProjectAbi,
    functionName: 'peoplesPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"stakersPool"`
 */
export const useReadCtzndIProjectStakersPool =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIProjectAbi,
    functionName: 'stakersPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"tokenToInvestmentToken"`
 */
export const useReadCtzndIProjectTokenToInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIProjectAbi,
    functionName: 'tokenToInvestmentToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIProjectAbi}__
 */
export const useWriteCtzndIProject = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIProjectAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"approveByLegal"`
 */
export const useWriteCtzndIProjectApproveByLegal =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIProjectAbi,
    functionName: 'approveByLegal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"approveByManager"`
 */
export const useWriteCtzndIProjectApproveByManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIProjectAbi,
    functionName: 'approveByManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteCtzndIProjectInvest = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndIProjectAbi, functionName: 'invest' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIProjectAbi}__
 */
export const useSimulateCtzndIProject = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndIProjectAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"approveByLegal"`
 */
export const useSimulateCtzndIProjectApproveByLegal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIProjectAbi,
    functionName: 'approveByLegal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"approveByManager"`
 */
export const useSimulateCtzndIProjectApproveByManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIProjectAbi,
    functionName: 'approveByManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIProjectAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateCtzndIProjectInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIProjectAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndISaleAbi}__
 */
export const useReadCtzndISale = /*#__PURE__*/ createUseReadContract({
  abi: ctzndISaleAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadCtzndISaleAllocation = /*#__PURE__*/ createUseReadContract({
  abi: ctzndISaleAbi,
  functionName: 'allocation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"paymentToken"`
 */
export const useReadCtzndISalePaymentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndISaleAbi,
    functionName: 'paymentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"paymentTokenToToken"`
 */
export const useReadCtzndISalePaymentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndISaleAbi,
    functionName: 'paymentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"refundAmount"`
 */
export const useReadCtzndISaleRefundAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndISaleAbi,
    functionName: 'refundAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"token"`
 */
export const useReadCtzndISaleToken = /*#__PURE__*/ createUseReadContract({
  abi: ctzndISaleAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"tokenToPaymentToken"`
 */
export const useReadCtzndISaleTokenToPaymentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndISaleAbi,
    functionName: 'tokenToPaymentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadCtzndISaleUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndISaleAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndISaleAbi}__
 */
export const useWriteCtzndISale = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndISaleAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"buy"`
 */
export const useWriteCtzndISaleBuy = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndISaleAbi,
  functionName: 'buy',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteCtzndISaleRefund = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndISaleAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWriteCtzndISaleSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndISaleAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteCtzndISaleWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndISaleAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndISaleAbi}__
 */
export const useSimulateCtzndISale = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndISaleAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"buy"`
 */
export const useSimulateCtzndISaleBuy = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndISaleAbi, functionName: 'buy' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateCtzndISaleRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndISaleAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulateCtzndISaleSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndISaleAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndISaleAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateCtzndISaleWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndISaleAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIStakingAbi}__
 */
export const useReadCtzndIStaking = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIStakingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIStakingAbi}__ and `functionName` set to `"hasStaked"`
 */
export const useReadCtzndIStakingHasStaked =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIStakingAbi,
    functionName: 'hasStaked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIStakingAbi}__ and `functionName` set to `"withdrawable"`
 */
export const useReadCtzndIStakingWithdrawable =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIStakingAbi,
    functionName: 'withdrawable',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIStakingAbi}__
 */
export const useWriteCtzndIStaking = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIStakingAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIStakingAbi}__ and `functionName` set to `"rebond"`
 */
export const useWriteCtzndIStakingRebond = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndIStakingAbi, functionName: 'rebond' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIStakingAbi}__ and `functionName` set to `"stake"`
 */
export const useWriteCtzndIStakingStake = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIStakingAbi,
  functionName: 'stake',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIStakingAbi}__ and `functionName` set to `"unbond"`
 */
export const useWriteCtzndIStakingUnbond = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndIStakingAbi, functionName: 'unbond' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIStakingAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteCtzndIStakingWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIStakingAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIStakingAbi}__
 */
export const useSimulateCtzndIStaking = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndIStakingAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIStakingAbi}__ and `functionName` set to `"rebond"`
 */
export const useSimulateCtzndIStakingRebond =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIStakingAbi,
    functionName: 'rebond',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIStakingAbi}__ and `functionName` set to `"stake"`
 */
export const useSimulateCtzndIStakingStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIStakingAbi,
    functionName: 'stake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIStakingAbi}__ and `functionName` set to `"unbond"`
 */
export const useSimulateCtzndIStakingUnbond =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIStakingAbi,
    functionName: 'unbond',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIStakingAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateCtzndIStakingWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIStakingAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIVestingAbi}__
 */
export const useReadCtzndIVesting = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIVestingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"claimable"`
 */
export const useReadCtzndIVestingClaimable =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIVestingAbi,
    functionName: 'claimable',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"claimed"`
 */
export const useReadCtzndIVestingClaimed = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIVestingAbi,
  functionName: 'claimed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"privateSaleCap"`
 */
export const useReadCtzndIVestingPrivateSaleCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIVestingAbi,
    functionName: 'privateSaleCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"publicSaleCliffMonths"`
 */
export const useReadCtzndIVestingPublicSaleCliffMonths =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIVestingAbi,
    functionName: 'publicSaleCliffMonths',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"publicSaleVestingMonths"`
 */
export const useReadCtzndIVestingPublicSaleVestingMonths =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIVestingAbi,
    functionName: 'publicSaleVestingMonths',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"startTime"`
 */
export const useReadCtzndIVestingStartTime =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIVestingAbi,
    functionName: 'startTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"token"`
 */
export const useReadCtzndIVestingToken = /*#__PURE__*/ createUseReadContract({
  abi: ctzndIVestingAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"totalAllocated"`
 */
export const useReadCtzndIVestingTotalAllocated =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndIVestingAbi,
    functionName: 'totalAllocated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIVestingAbi}__
 */
export const useWriteCtzndIVesting = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIVestingAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"claim"`
 */
export const useWriteCtzndIVestingClaim = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndIVestingAbi,
  functionName: 'claim',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"createPrivateSaleVest"`
 */
export const useWriteCtzndIVestingCreatePrivateSaleVest =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndIVestingAbi,
    functionName: 'createPrivateSaleVest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteCtzndIVestingRefund = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndIVestingAbi, functionName: 'refund' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIVestingAbi}__
 */
export const useSimulateCtzndIVesting = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndIVestingAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"claim"`
 */
export const useSimulateCtzndIVestingClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIVestingAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"createPrivateSaleVest"`
 */
export const useSimulateCtzndIVestingCreatePrivateSaleVest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIVestingAbi,
    functionName: 'createPrivateSaleVest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndIVestingAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateCtzndIVestingRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndIVestingAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__
 */
export const useReadCtzndMockErc721 = /*#__PURE__*/ createUseReadContract({
  abi: ctzndMockErc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadCtzndMockErc721BalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockErc721Abi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadCtzndMockErc721GetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockErc721Abi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadCtzndMockErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockErc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadCtzndMockErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: ctzndMockErc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadCtzndMockErc721OwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockErc721Abi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCtzndMockErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockErc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadCtzndMockErc721Symbol = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndMockErc721Abi, functionName: 'symbol' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadCtzndMockErc721TokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockErc721Abi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__
 */
export const useWriteCtzndMockErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndMockErc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteCtzndMockErc721Approve =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndMockErc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"initialize"`
 */
export const useWriteCtzndMockErc721Initialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndMockErc721Abi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteCtzndMockErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndMockErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteCtzndMockErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndMockErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteCtzndMockErc721TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndMockErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__
 */
export const useSimulateCtzndMockErc721 =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndMockErc721Abi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateCtzndMockErc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndMockErc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateCtzndMockErc721Initialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndMockErc721Abi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateCtzndMockErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndMockErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateCtzndMockErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndMockErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateCtzndMockErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndMockErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndMockErc721Abi}__
 */
export const useWatchCtzndMockErc721Event =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndMockErc721Abi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchCtzndMockErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndMockErc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchCtzndMockErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndMockErc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndMockErc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchCtzndMockErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndMockErc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__
 */
export const useReadCtzndMockProject = /*#__PURE__*/ createUseReadContract({
  abi: ctzndMockProjectAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"approveByLegal"`
 */
export const useReadCtzndMockProjectApproveByLegal =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockProjectAbi,
    functionName: 'approveByLegal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"approveByManager"`
 */
export const useReadCtzndMockProjectApproveByManager =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockProjectAbi,
    functionName: 'approveByManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"approvedByLegal"`
 */
export const useReadCtzndMockProjectApprovedByLegal =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockProjectAbi,
    functionName: 'approvedByLegal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"approvedByManager"`
 */
export const useReadCtzndMockProjectApprovedByManager =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockProjectAbi,
    functionName: 'approvedByManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"hasTokens"`
 */
export const useReadCtzndMockProjectHasTokens =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockProjectAbi,
    functionName: 'hasTokens',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"investmentTokenToToken"`
 */
export const useReadCtzndMockProjectInvestmentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockProjectAbi,
    functionName: 'investmentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"isReadyForListing"`
 */
export const useReadCtzndMockProjectIsReadyForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockProjectAbi,
    functionName: 'isReadyForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"merkleRoot"`
 */
export const useReadCtzndMockProjectMerkleRoot =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockProjectAbi,
    functionName: 'merkleRoot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"peoplesPool"`
 */
export const useReadCtzndMockProjectPeoplesPool =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockProjectAbi,
    functionName: 'peoplesPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"stakersPool"`
 */
export const useReadCtzndMockProjectStakersPool =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockProjectAbi,
    functionName: 'stakersPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"tokenToInvestmentToken"`
 */
export const useReadCtzndMockProjectTokenToInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockProjectAbi,
    functionName: 'tokenToInvestmentToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__
 */
export const useWriteCtzndMockProject = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndMockProjectAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteCtzndMockProjectInvest =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndMockProjectAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"test_createPeoplesPool"`
 */
export const useWriteCtzndMockProjectTestCreatePeoplesPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndMockProjectAbi,
    functionName: 'test_createPeoplesPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"test_createStakersPool"`
 */
export const useWriteCtzndMockProjectTestCreateStakersPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndMockProjectAbi,
    functionName: 'test_createStakersPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__
 */
export const useSimulateCtzndMockProject =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndMockProjectAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateCtzndMockProjectInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndMockProjectAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"test_createPeoplesPool"`
 */
export const useSimulateCtzndMockProjectTestCreatePeoplesPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndMockProjectAbi,
    functionName: 'test_createPeoplesPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockProjectAbi}__ and `functionName` set to `"test_createStakersPool"`
 */
export const useSimulateCtzndMockProjectTestCreateStakersPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndMockProjectAbi,
    functionName: 'test_createStakersPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__
 */
export const useReadCtzndMockSale = /*#__PURE__*/ createUseReadContract({
  abi: ctzndMockSaleAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadCtzndMockSaleAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockSaleAbi,
    functionName: 'allocation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"buy"`
 */
export const useReadCtzndMockSaleBuy = /*#__PURE__*/ createUseReadContract({
  abi: ctzndMockSaleAbi,
  functionName: 'buy',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"calls"`
 */
export const useReadCtzndMockSaleCalls = /*#__PURE__*/ createUseReadContract({
  abi: ctzndMockSaleAbi,
  functionName: 'calls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"paymentToken"`
 */
export const useReadCtzndMockSalePaymentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockSaleAbi,
    functionName: 'paymentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"paymentTokenToToken"`
 */
export const useReadCtzndMockSalePaymentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockSaleAbi,
    functionName: 'paymentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"refundAmount"`
 */
export const useReadCtzndMockSaleRefundAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockSaleAbi,
    functionName: 'refundAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useReadCtzndMockSaleSetIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockSaleAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCtzndMockSaleSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockSaleAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"test_Called"`
 */
export const useReadCtzndMockSaleTestCalled =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockSaleAbi,
    functionName: 'test_Called',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"token"`
 */
export const useReadCtzndMockSaleToken = /*#__PURE__*/ createUseReadContract({
  abi: ctzndMockSaleAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"tokenToPaymentToken"`
 */
export const useReadCtzndMockSaleTokenToPaymentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockSaleAbi,
    functionName: 'tokenToPaymentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadCtzndMockSaleUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndMockSaleAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"withdraw"`
 */
export const useReadCtzndMockSaleWithdraw = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndMockSaleAbi, functionName: 'withdraw' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__
 */
export const useWriteCtzndMockSale = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndMockSaleAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteCtzndMockSaleRefund = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndMockSaleAbi, functionName: 'refund' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"test_addAllocation"`
 */
export const useWriteCtzndMockSaleTestAddAllocation =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndMockSaleAbi,
    functionName: 'test_addAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"test_addRefund"`
 */
export const useWriteCtzndMockSaleTestAddRefund =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndMockSaleAbi,
    functionName: 'test_addRefund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__
 */
export const useSimulateCtzndMockSale = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndMockSaleAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateCtzndMockSaleRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndMockSaleAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"test_addAllocation"`
 */
export const useSimulateCtzndMockSaleTestAddAllocation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndMockSaleAbi,
    functionName: 'test_addAllocation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndMockSaleAbi}__ and `functionName` set to `"test_addRefund"`
 */
export const useSimulateCtzndMockSaleTestAddRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndMockSaleAbi,
    functionName: 'test_addRefund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndOverMaxTargetDevDeployScriptAbi}__
 */
export const useReadCtzndOverMaxTargetDevDeployScript =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndOverMaxTargetDevDeployScriptAbi,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndOverMaxTargetDevDeployScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadCtzndOverMaxTargetDevDeployScriptIsScript =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndOverMaxTargetDevDeployScriptAbi,
    functionName: 'IS_SCRIPT',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndOverMaxTargetDevDeployScriptAbi}__
 */
export const useWriteCtzndOverMaxTargetDevDeployScript =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndOverMaxTargetDevDeployScriptAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndOverMaxTargetDevDeployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteCtzndOverMaxTargetDevDeployScriptRun =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndOverMaxTargetDevDeployScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndOverMaxTargetDevDeployScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteCtzndOverMaxTargetDevDeployScriptSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndOverMaxTargetDevDeployScriptAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndOverMaxTargetDevDeployScriptAbi}__
 */
export const useSimulateCtzndOverMaxTargetDevDeployScript =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndOverMaxTargetDevDeployScriptAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndOverMaxTargetDevDeployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateCtzndOverMaxTargetDevDeployScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndOverMaxTargetDevDeployScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndOverMaxTargetDevDeployScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateCtzndOverMaxTargetDevDeployScriptSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndOverMaxTargetDevDeployScriptAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPausableAbi}__
 */
export const useReadCtzndPausable = /*#__PURE__*/ createUseReadContract({
  abi: ctzndPausableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPausableAbi}__ and `functionName` set to `"paused"`
 */
export const useReadCtzndPausablePaused = /*#__PURE__*/ createUseReadContract({
  abi: ctzndPausableAbi,
  functionName: 'paused',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndPausableAbi}__
 */
export const useWatchCtzndPausableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndPausableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndPausableAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchCtzndPausablePausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndPausableAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndPausableAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchCtzndPausableUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndPausableAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__
 */
export const useReadCtzndPeoplesPool = /*#__PURE__*/ createUseReadContract({
  abi: ctzndPeoplesPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadCtzndPeoplesPoolCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadCtzndPeoplesPoolAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'allocation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadCtzndPeoplesPoolIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"investmentToken"`
 */
export const useReadCtzndPeoplesPoolInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'investmentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadCtzndPeoplesPoolInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadCtzndPeoplesPoolInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"project"`
 */
export const useReadCtzndPeoplesPoolProject =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'project',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"refundableAmount"`
 */
export const useReadCtzndPeoplesPoolRefundableAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'refundableAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadCtzndPeoplesPoolRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadCtzndPeoplesPoolRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadCtzndPeoplesPoolRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadCtzndPeoplesPoolRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadCtzndPeoplesPoolRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadCtzndPeoplesPoolRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadCtzndPeoplesPoolRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"saleSupply"`
 */
export const useReadCtzndPeoplesPoolSaleSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'saleSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"totalUncappedAllocations"`
 */
export const useReadCtzndPeoplesPoolTotalUncappedAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'totalUncappedAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadCtzndPeoplesPoolUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__
 */
export const useWriteCtzndPeoplesPool = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndPeoplesPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteCtzndPeoplesPoolInvest =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteCtzndPeoplesPoolRefund =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteCtzndPeoplesPoolRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWriteCtzndPeoplesPoolSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__
 */
export const useSimulateCtzndPeoplesPool =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndPeoplesPoolAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateCtzndPeoplesPoolInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateCtzndPeoplesPoolRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateCtzndPeoplesPoolRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulateCtzndPeoplesPoolSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndPeoplesPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__
 */
export const useWatchCtzndPeoplesPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndPeoplesPoolAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndPeoplesPoolAbi}__ and `eventName` set to `"Refund"`
 */
export const useWatchCtzndPeoplesPoolRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndPeoplesPoolAbi,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__
 */
export const useReadCtzndPool = /*#__PURE__*/ createUseReadContract({
  abi: ctzndPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadCtzndPoolCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadCtzndPoolAllocation = /*#__PURE__*/ createUseReadContract({
  abi: ctzndPoolAbi,
  functionName: 'allocation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadCtzndPoolIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"investmentToken"`
 */
export const useReadCtzndPoolInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'investmentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadCtzndPoolInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadCtzndPoolInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"project"`
 */
export const useReadCtzndPoolProject = /*#__PURE__*/ createUseReadContract({
  abi: ctzndPoolAbi,
  functionName: 'project',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"refundableAmount"`
 */
export const useReadCtzndPoolRefundableAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'refundableAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadCtzndPoolRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadCtzndPoolRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadCtzndPoolRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadCtzndPoolRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadCtzndPoolRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadCtzndPoolRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadCtzndPoolRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"saleSupply"`
 */
export const useReadCtzndPoolSaleSupply = /*#__PURE__*/ createUseReadContract({
  abi: ctzndPoolAbi,
  functionName: 'saleSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"totalUncappedAllocations"`
 */
export const useReadCtzndPoolTotalUncappedAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'totalUncappedAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadCtzndPoolUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndPoolAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndPoolAbi}__
 */
export const useWriteCtzndPool = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteCtzndPoolInvest = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndPoolAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteCtzndPoolRefund = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndPoolAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteCtzndPoolRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWriteCtzndPoolSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndPoolAbi}__
 */
export const useSimulateCtzndPool = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndPoolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateCtzndPoolInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndPoolAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateCtzndPoolRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndPoolAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateCtzndPoolRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulateCtzndPoolSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndPoolAbi}__
 */
export const useWatchCtzndPoolEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: ctzndPoolAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndPoolAbi}__ and `eventName` set to `"Refund"`
 */
export const useWatchCtzndPoolRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndPoolAbi,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__
 */
export const useReadCtzndProject = /*#__PURE__*/ createUseReadContract({
  abi: ctzndProjectAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"MUL"`
 */
export const useReadCtzndProjectMul = /*#__PURE__*/ createUseReadContract({
  abi: ctzndProjectAbi,
  functionName: 'MUL',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"approvedByLegal"`
 */
export const useReadCtzndProjectApprovedByLegal =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'approvedByLegal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"approvedByManager"`
 */
export const useReadCtzndProjectApprovedByManager =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'approvedByManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"controller"`
 */
export const useReadCtzndProjectController =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'controller',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"description"`
 */
export const useReadCtzndProjectDescription =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'description',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"hasTokens"`
 */
export const useReadCtzndProjectHasTokens = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndProjectAbi, functionName: 'hasTokens' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"investmentTokenToToken"`
 */
export const useReadCtzndProjectInvestmentTokenToToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'investmentTokenToToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"isReadyForListing"`
 */
export const useReadCtzndProjectIsReadyForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'isReadyForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"merkleRoot"`
 */
export const useReadCtzndProjectMerkleRoot =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'merkleRoot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"peoplesPool"`
 */
export const useReadCtzndProjectPeoplesPool =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'peoplesPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"rate"`
 */
export const useReadCtzndProjectRate = /*#__PURE__*/ createUseReadContract({
  abi: ctzndProjectAbi,
  functionName: 'rate',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"saleSupply"`
 */
export const useReadCtzndProjectSaleSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'saleSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"stakersPool"`
 */
export const useReadCtzndProjectStakersPool =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'stakersPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCtzndProjectSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"token"`
 */
export const useReadCtzndProjectToken = /*#__PURE__*/ createUseReadContract({
  abi: ctzndProjectAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"tokenToInvestmentToken"`
 */
export const useReadCtzndProjectTokenToInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectAbi,
    functionName: 'tokenToInvestmentToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndProjectAbi}__
 */
export const useWriteCtzndProject = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndProjectAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"approveByLegal"`
 */
export const useWriteCtzndProjectApproveByLegal =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndProjectAbi,
    functionName: 'approveByLegal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"approveByManager"`
 */
export const useWriteCtzndProjectApproveByManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndProjectAbi,
    functionName: 'approveByManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteCtzndProjectInvest = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndProjectAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndProjectAbi}__
 */
export const useSimulateCtzndProject = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndProjectAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"approveByLegal"`
 */
export const useSimulateCtzndProjectApproveByLegal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndProjectAbi,
    functionName: 'approveByLegal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"approveByManager"`
 */
export const useSimulateCtzndProjectApproveByManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndProjectAbi,
    functionName: 'approveByManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndProjectAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateCtzndProjectInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndProjectAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectHelpersAbi}__
 */
export const useReadCtzndProjectHelpers = /*#__PURE__*/ createUseReadContract({
  abi: ctzndProjectHelpersAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectHelpersAbi}__ and `functionName` set to `"MUL"`
 */
export const useReadCtzndProjectHelpersMul =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectHelpersAbi,
    functionName: 'MUL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__
 */
export const useReadCtzndProjectTest = /*#__PURE__*/ createUseReadContract({
  abi: ctzndProjectTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCtzndProjectTestIsTest =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectTestAbi,
    functionName: 'IS_TEST',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadCtzndProjectTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadCtzndProjectTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadCtzndProjectTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"proofs"`
 */
export const useReadCtzndProjectTestProofs =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectTestAbi,
    functionName: 'proofs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadCtzndProjectTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadCtzndProjectTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadCtzndProjectTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadCtzndProjectTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadCtzndProjectTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadCtzndProjectTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__
 */
export const useWriteCtzndProjectTest = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndProjectTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCtzndProjectTestFailed =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndProjectTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteCtzndProjectTestSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndProjectTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"testInvest"`
 */
export const useWriteCtzndProjectTestTestInvest =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndProjectTestAbi,
    functionName: 'testInvest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"testInvestShouldRevertWithInvalidProof"`
 */
export const useWriteCtzndProjectTestTestInvestShouldRevertWithInvalidProof =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndProjectTestAbi,
    functionName: 'testInvestShouldRevertWithInvalidProof',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__
 */
export const useSimulateCtzndProjectTest =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndProjectTestAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCtzndProjectTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndProjectTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateCtzndProjectTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndProjectTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"testInvest"`
 */
export const useSimulateCtzndProjectTestTestInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndProjectTestAbi,
    functionName: 'testInvest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `functionName` set to `"testInvestShouldRevertWithInvalidProof"`
 */
export const useSimulateCtzndProjectTestTestInvestShouldRevertWithInvalidProof =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndProjectTestAbi,
    functionName: 'testInvestShouldRevertWithInvalidProof',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__
 */
export const useWatchCtzndProjectTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndProjectTestAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCtzndProjectTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCtzndProjectTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchCtzndProjectTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCtzndProjectTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCtzndProjectTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCtzndProjectTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCtzndProjectTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchCtzndProjectTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCtzndProjectTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCtzndProjectTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCtzndProjectTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCtzndProjectTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCtzndProjectTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCtzndProjectTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCtzndProjectTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCtzndProjectTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCtzndProjectTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndProjectTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCtzndProjectTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndProjectTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__
 */
export const useReadCtzndProjectVoting = /*#__PURE__*/ createUseReadContract({
  abi: ctzndProjectVotingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"projectToVotesIndex"`
 */
export const useReadCtzndProjectVotingProjectToVotesIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'projectToVotesIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"projectVoteCount"`
 */
export const useReadCtzndProjectVotingProjectVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'projectVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"projectVoting_finalBonus"`
 */
export const useReadCtzndProjectVotingProjectVotingFinalBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'projectVoting_finalBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"projectVoting_initialBonus"`
 */
export const useReadCtzndProjectVotingProjectVotingInitialBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'projectVoting_initialBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"projectVoting_projects"`
 */
export const useReadCtzndProjectVotingProjectVotingProjects =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'projectVoting_projects',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"projectVoting_singleSlotDuration"`
 */
export const useReadCtzndProjectVotingProjectVotingSingleSlotDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'projectVoting_singleSlotDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"projectVoting_voteLimitPerUser"`
 */
export const useReadCtzndProjectVotingProjectVotingVoteLimitPerUser =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'projectVoting_voteLimitPerUser',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"projectVoting_votingPeriod"`
 */
export const useReadCtzndProjectVotingProjectVotingVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'projectVoting_votingPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"userHasVotedForProject"`
 */
export const useReadCtzndProjectVotingUserHasVotedForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'userHasVotedForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"userVoteCount"`
 */
export const useReadCtzndProjectVotingUserVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'userVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"votes"`
 */
export const useReadCtzndProjectVotingVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'votes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"votesIndexToProject"`
 */
export const useReadCtzndProjectVotingVotesIndexToProject =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'votesIndexToProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndProjectVotingAbi}__ and `functionName` set to `"weightedProjectVoteCount"`
 */
export const useReadCtzndProjectVotingWeightedProjectVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndProjectVotingAbi,
    functionName: 'weightedProjectVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundScriptAbi}__
 */
export const useReadCtzndRefundScript = /*#__PURE__*/ createUseReadContract({
  abi: ctzndRefundScriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadCtzndRefundScriptIsScript =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRefundScriptAbi,
    functionName: 'IS_SCRIPT',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRefundScriptAbi}__
 */
export const useWriteCtzndRefundScript = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndRefundScriptAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRefundScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteCtzndRefundScriptRun =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRefundScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRefundScriptAbi}__
 */
export const useSimulateCtzndRefundScript =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndRefundScriptAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRefundScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateCtzndRefundScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRefundScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__
 */
export const useReadCtzndRefundTest = /*#__PURE__*/ createUseReadContract({
  abi: ctzndRefundTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCtzndRefundTestIsTest = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndRefundTestAbi, functionName: 'IS_TEST' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadCtzndRefundTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRefundTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadCtzndRefundTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRefundTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadCtzndRefundTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRefundTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadCtzndRefundTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRefundTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadCtzndRefundTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRefundTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadCtzndRefundTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRefundTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadCtzndRefundTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRefundTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadCtzndRefundTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRefundTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadCtzndRefundTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRefundTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__
 */
export const useWriteCtzndRefundTest = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndRefundTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCtzndRefundTestFailed =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRefundTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteCtzndRefundTestSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRefundTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"test_RefundAll"`
 */
export const useWriteCtzndRefundTestTestRefundAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRefundTestAbi,
    functionName: 'test_RefundAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__
 */
export const useSimulateCtzndRefundTest =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndRefundTestAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCtzndRefundTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRefundTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateCtzndRefundTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRefundTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `functionName` set to `"test_RefundAll"`
 */
export const useSimulateCtzndRefundTestTestRefundAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRefundTestAbi,
    functionName: 'test_RefundAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__
 */
export const useWatchCtzndRefundTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndRefundTestAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCtzndRefundTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCtzndRefundTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchCtzndRefundTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCtzndRefundTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCtzndRefundTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCtzndRefundTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCtzndRefundTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchCtzndRefundTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCtzndRefundTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCtzndRefundTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCtzndRefundTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCtzndRefundTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCtzndRefundTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCtzndRefundTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCtzndRefundTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCtzndRefundTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCtzndRefundTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRefundTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCtzndRefundTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRefundTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__
 */
export const useReadCtzndRisingTide = /*#__PURE__*/ createUseReadContract({
  abi: ctzndRisingTideAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadCtzndRisingTideCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadCtzndRisingTideIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadCtzndRisingTideInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadCtzndRisingTideInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadCtzndRisingTideRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadCtzndRisingTideRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadCtzndRisingTideRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadCtzndRisingTideRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadCtzndRisingTideRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadCtzndRisingTideRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadCtzndRisingTideRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__
 */
export const useWriteCtzndRisingTide = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndRisingTideAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteCtzndRisingTideRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRisingTideAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__
 */
export const useSimulateCtzndRisingTide =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndRisingTideAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRisingTideAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateCtzndRisingTideRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRisingTideAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__
 */
export const useReadCtzndRisingTideTest = /*#__PURE__*/ createUseReadContract({
  abi: ctzndRisingTideTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCtzndRisingTideTestIsTest =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'IS_TEST',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadCtzndRisingTideTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadCtzndRisingTideTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadCtzndRisingTideTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadCtzndRisingTideTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadCtzndRisingTideTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadCtzndRisingTideTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadCtzndRisingTideTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadCtzndRisingTideTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadCtzndRisingTideTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__
 */
export const useWriteCtzndRisingTideTest = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndRisingTideTestAbi },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCtzndRisingTideTestFailed =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteCtzndRisingTideTestSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"testGitbookExampleCorrectly"`
 */
export const useWriteCtzndRisingTideTestTestGitbookExampleCorrectly =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'testGitbookExampleCorrectly',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"testGitbookExampleFailsWithLargerCap"`
 */
export const useWriteCtzndRisingTideTestTestGitbookExampleFailsWithLargerCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'testGitbookExampleFailsWithLargerCap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"testGitbookExampleFailsWithSmallerCap"`
 */
export const useWriteCtzndRisingTideTestTestGitbookExampleFailsWithSmallerCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'testGitbookExampleFailsWithSmallerCap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"testSmallExampleCorrectly"`
 */
export const useWriteCtzndRisingTideTestTestSmallExampleCorrectly =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'testSmallExampleCorrectly',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"testSmallExampleFails"`
 */
export const useWriteCtzndRisingTideTestTestSmallExampleFails =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'testSmallExampleFails',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__
 */
export const useSimulateCtzndRisingTideTest =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndRisingTideTestAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCtzndRisingTideTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateCtzndRisingTideTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"testGitbookExampleCorrectly"`
 */
export const useSimulateCtzndRisingTideTestTestGitbookExampleCorrectly =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'testGitbookExampleCorrectly',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"testGitbookExampleFailsWithLargerCap"`
 */
export const useSimulateCtzndRisingTideTestTestGitbookExampleFailsWithLargerCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'testGitbookExampleFailsWithLargerCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"testGitbookExampleFailsWithSmallerCap"`
 */
export const useSimulateCtzndRisingTideTestTestGitbookExampleFailsWithSmallerCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'testGitbookExampleFailsWithSmallerCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"testSmallExampleCorrectly"`
 */
export const useSimulateCtzndRisingTideTestTestSmallExampleCorrectly =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'testSmallExampleCorrectly',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `functionName` set to `"testSmallExampleFails"`
 */
export const useSimulateCtzndRisingTideTestTestSmallExampleFails =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndRisingTideTestAbi,
    functionName: 'testSmallExampleFails',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__
 */
export const useWatchCtzndRisingTideTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndRisingTideTestAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCtzndRisingTideTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCtzndRisingTideTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchCtzndRisingTideTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCtzndRisingTideTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCtzndRisingTideTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCtzndRisingTideTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCtzndRisingTideTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchCtzndRisingTideTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCtzndRisingTideTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCtzndRisingTideTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCtzndRisingTideTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCtzndRisingTideTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCtzndRisingTideTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCtzndRisingTideTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCtzndRisingTideTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCtzndRisingTideTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCtzndRisingTideTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndRisingTideTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCtzndRisingTideTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndRisingTideTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSale = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleAllocated = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'allocated',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"allocation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleAllocation = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'allocation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"end"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleEnd = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'end',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"endRegistration"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleHasRole = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"individualCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleMaxTarget = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'maxTarget',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"maxTokensForSale"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleMaxTokensForSale =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'maxTokensForSale',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"merkleRoot"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleMerkleRoot = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'merkleRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"minContribution"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleMinTarget = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'minTarget',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"minTokensForSale"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleMinTokensForSale =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'minTokensForSale',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"paymentToken"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleRate = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'rate',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"refundAmount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleStart = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'start',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"startRegistration"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleToken = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"tokenToPaymentToken"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleTokenToPaymentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'tokenToPaymentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"totalUncappedAllocations"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useReadCtzndSaleWithdrawn = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'withdrawn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWriteCtzndSale = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"buy"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWriteCtzndSaleBuy = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'buy',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"grantRole"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWriteCtzndSaleGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"refund"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWriteCtzndSaleRefund = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"renounceRole"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWriteCtzndSaleRevokeRole = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndSaleAbi, address: ctzndSaleAddress, functionName: 'revokeRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"risingTide_validate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWriteCtzndSaleSetEnd = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'setEnd',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setEndRegistration"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWriteCtzndSaleSetEndRegistration =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setEndRegistration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setIndividualCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWriteCtzndSaleSetStart = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'setStart',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setStartRegistration"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWriteCtzndSaleSetStartRegistration =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setStartRegistration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setToken"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWriteCtzndSaleSetToken = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'setToken',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWriteCtzndSaleWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useSimulateCtzndSale = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"buy"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useSimulateCtzndSaleBuy = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndSaleAbi,
  address: ctzndSaleAddress,
  functionName: 'buy',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"grantRole"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useSimulateCtzndSaleSetEnd =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setEnd',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setEndRegistration"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useSimulateCtzndSaleSetEndRegistration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setEndRegistration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setIndividualCap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useSimulateCtzndSaleSetStart =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setStart',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setStartRegistration"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useSimulateCtzndSaleSetStartRegistration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    functionName: 'setStartRegistration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleAbi}__ and `functionName` set to `"setToken"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWatchCtzndSaleEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: ctzndSaleAbi, address: ctzndSaleAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleAbi}__ and `eventName` set to `"Claim"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x733e41e5a08c6d922eddaef715186d7e97d55c50)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x85b34Aa54fdf8242e4656eA50b711F45340925bC)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d)
 */
export const useWatchCtzndSaleWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleAbi,
    address: ctzndSaleAddress,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__
 */
export const useReadCtzndSaleMaxTargetNotReachedTest =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCtzndSaleMaxTargetNotReachedTestIsTest =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'IS_TEST',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadCtzndSaleMaxTargetNotReachedTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadCtzndSaleMaxTargetNotReachedTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadCtzndSaleMaxTargetNotReachedTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadCtzndSaleMaxTargetNotReachedTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadCtzndSaleMaxTargetNotReachedTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadCtzndSaleMaxTargetNotReachedTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadCtzndSaleMaxTargetNotReachedTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadCtzndSaleMaxTargetNotReachedTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadCtzndSaleMaxTargetNotReachedTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__
 */
export const useWriteCtzndSaleMaxTargetNotReachedTest =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCtzndSaleMaxTargetNotReachedTestFailed =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteCtzndSaleMaxTargetNotReachedTestSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"test_AllocationAfterMaxTargetReached"`
 */
export const useWriteCtzndSaleMaxTargetNotReachedTestTestAllocationAfterMaxTargetReached =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'test_AllocationAfterMaxTargetReached',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"test_BuyRevertsWhenMaxTargetReached"`
 */
export const useWriteCtzndSaleMaxTargetNotReachedTestTestBuyRevertsWhenMaxTargetReached =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'test_BuyRevertsWhenMaxTargetReached',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__
 */
export const useSimulateCtzndSaleMaxTargetNotReachedTest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCtzndSaleMaxTargetNotReachedTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateCtzndSaleMaxTargetNotReachedTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"test_AllocationAfterMaxTargetReached"`
 */
export const useSimulateCtzndSaleMaxTargetNotReachedTestTestAllocationAfterMaxTargetReached =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'test_AllocationAfterMaxTargetReached',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `functionName` set to `"test_BuyRevertsWhenMaxTargetReached"`
 */
export const useSimulateCtzndSaleMaxTargetNotReachedTestTestBuyRevertsWhenMaxTargetReached =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    functionName: 'test_BuyRevertsWhenMaxTargetReached',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetNotReachedTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCtzndSaleMaxTargetNotReachedTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetNotReachedTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__
 */
export const useReadCtzndSaleMaxTargetReachedTest =
  /*#__PURE__*/ createUseReadContract({ abi: ctzndSaleMaxTargetReachedTestAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCtzndSaleMaxTargetReachedTestIsTest =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'IS_TEST',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadCtzndSaleMaxTargetReachedTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadCtzndSaleMaxTargetReachedTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadCtzndSaleMaxTargetReachedTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadCtzndSaleMaxTargetReachedTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadCtzndSaleMaxTargetReachedTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadCtzndSaleMaxTargetReachedTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadCtzndSaleMaxTargetReachedTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadCtzndSaleMaxTargetReachedTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadCtzndSaleMaxTargetReachedTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__
 */
export const useWriteCtzndSaleMaxTargetReachedTest =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCtzndSaleMaxTargetReachedTestFailed =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteCtzndSaleMaxTargetReachedTestSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"test_AllocationAfterMaxTargetReached"`
 */
export const useWriteCtzndSaleMaxTargetReachedTestTestAllocationAfterMaxTargetReached =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'test_AllocationAfterMaxTargetReached',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"test_BuyRevertsWhenMaxTargetReached"`
 */
export const useWriteCtzndSaleMaxTargetReachedTestTestBuyRevertsWhenMaxTargetReached =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'test_BuyRevertsWhenMaxTargetReached',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__
 */
export const useSimulateCtzndSaleMaxTargetReachedTest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCtzndSaleMaxTargetReachedTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateCtzndSaleMaxTargetReachedTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"test_AllocationAfterMaxTargetReached"`
 */
export const useSimulateCtzndSaleMaxTargetReachedTestTestAllocationAfterMaxTargetReached =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'test_AllocationAfterMaxTargetReached',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `functionName` set to `"test_BuyRevertsWhenMaxTargetReached"`
 */
export const useSimulateCtzndSaleMaxTargetReachedTestTestBuyRevertsWhenMaxTargetReached =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    functionName: 'test_BuyRevertsWhenMaxTargetReached',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__
 */
export const useWatchCtzndSaleMaxTargetReachedTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMaxTargetReachedTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCtzndSaleMaxTargetReachedTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMaxTargetReachedTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedDevDeployScriptAbi}__
 */
export const useReadCtzndSaleMinTargetNotReachedDevDeployScript =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedDevDeployScriptAbi,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedDevDeployScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadCtzndSaleMinTargetNotReachedDevDeployScriptIsScript =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedDevDeployScriptAbi,
    functionName: 'IS_SCRIPT',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedDevDeployScriptAbi}__
 */
export const useWriteCtzndSaleMinTargetNotReachedDevDeployScript =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMinTargetNotReachedDevDeployScriptAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedDevDeployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteCtzndSaleMinTargetNotReachedDevDeployScriptRun =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMinTargetNotReachedDevDeployScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedDevDeployScriptAbi}__
 */
export const useSimulateCtzndSaleMinTargetNotReachedDevDeployScript =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMinTargetNotReachedDevDeployScriptAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedDevDeployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateCtzndSaleMinTargetNotReachedDevDeployScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMinTargetNotReachedDevDeployScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__
 */
export const useReadCtzndSaleMinTargetNotReachedTest =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCtzndSaleMinTargetNotReachedTestIsTest =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'IS_TEST',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadCtzndSaleMinTargetNotReachedTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadCtzndSaleMinTargetNotReachedTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadCtzndSaleMinTargetNotReachedTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadCtzndSaleMinTargetNotReachedTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadCtzndSaleMinTargetNotReachedTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadCtzndSaleMinTargetNotReachedTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadCtzndSaleMinTargetNotReachedTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadCtzndSaleMinTargetNotReachedTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadCtzndSaleMinTargetNotReachedTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__
 */
export const useWriteCtzndSaleMinTargetNotReachedTest =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCtzndSaleMinTargetNotReachedTestFailed =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteCtzndSaleMinTargetNotReachedTestSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"test_AllocationWhenMinTargetReached"`
 */
export const useWriteCtzndSaleMinTargetNotReachedTestTestAllocationWhenMinTargetReached =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'test_AllocationWhenMinTargetReached',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"test_RefundsWhenMinTargetNotReached"`
 */
export const useWriteCtzndSaleMinTargetNotReachedTestTestRefundsWhenMinTargetNotReached =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'test_RefundsWhenMinTargetNotReached',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__
 */
export const useSimulateCtzndSaleMinTargetNotReachedTest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCtzndSaleMinTargetNotReachedTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateCtzndSaleMinTargetNotReachedTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"test_AllocationWhenMinTargetReached"`
 */
export const useSimulateCtzndSaleMinTargetNotReachedTestTestAllocationWhenMinTargetReached =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'test_AllocationWhenMinTargetReached',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `functionName` set to `"test_RefundsWhenMinTargetNotReached"`
 */
export const useSimulateCtzndSaleMinTargetNotReachedTestTestRefundsWhenMinTargetNotReached =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    functionName: 'test_RefundsWhenMinTargetNotReached',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__
 */
export const useWatchCtzndSaleMinTargetNotReachedTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleMinTargetNotReachedTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCtzndSaleMinTargetNotReachedTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleMinTargetNotReachedTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__
 */
export const useReadCtzndSaleTest = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCtzndSaleTestIsTest = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSaleTestAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadCtzndSaleTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadCtzndSaleTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadCtzndSaleTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadCtzndSaleTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadCtzndSaleTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadCtzndSaleTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadCtzndSaleTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadCtzndSaleTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadCtzndSaleTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSaleTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__
 */
export const useWriteCtzndSaleTest = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCtzndSaleTestFailed = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndSaleTestAbi, functionName: 'failed' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteCtzndSaleTestSetUp = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSaleTestAbi,
  functionName: 'setUp',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"test_InitialContribution"`
 */
export const useWriteCtzndSaleTestTestInitialContribution =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSaleTestAbi,
    functionName: 'test_InitialContribution',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__
 */
export const useSimulateCtzndSaleTest = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndSaleTestAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCtzndSaleTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateCtzndSaleTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `functionName` set to `"test_InitialContribution"`
 */
export const useSimulateCtzndSaleTestTestInitialContribution =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSaleTestAbi,
    functionName: 'test_InitialContribution',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__
 */
export const useWatchCtzndSaleTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndSaleTestAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"Claim"`
 */
export const useWatchCtzndSaleTestClaimEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'Claim',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"Purchase"`
 */
export const useWatchCtzndSaleTestPurchaseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'Purchase',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"Refund"`
 */
export const useWatchCtzndSaleTestRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCtzndSaleTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCtzndSaleTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchCtzndSaleTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCtzndSaleTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCtzndSaleTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCtzndSaleTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCtzndSaleTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchCtzndSaleTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCtzndSaleTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCtzndSaleTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCtzndSaleTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCtzndSaleTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCtzndSaleTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCtzndSaleTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCtzndSaleTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCtzndSaleTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCtzndSaleTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndSaleTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCtzndSaleTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndSaleTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndScriptAbi}__
 */
export const useReadCtzndScript = /*#__PURE__*/ createUseReadContract({
  abi: ctzndScriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadCtzndScriptIsScript = /*#__PURE__*/ createUseReadContract({
  abi: ctzndScriptAbi,
  functionName: 'IS_SCRIPT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSetCapScriptAbi}__
 */
export const useReadCtzndSetCapScript = /*#__PURE__*/ createUseReadContract({
  abi: ctzndSetCapScriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndSetCapScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadCtzndSetCapScriptIsScript =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndSetCapScriptAbi,
    functionName: 'IS_SCRIPT',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSetCapScriptAbi}__
 */
export const useWriteCtzndSetCapScript = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndSetCapScriptAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndSetCapScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteCtzndSetCapScriptRun =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndSetCapScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSetCapScriptAbi}__
 */
export const useSimulateCtzndSetCapScript =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndSetCapScriptAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndSetCapScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateCtzndSetCapScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndSetCapScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__
 */
export const useReadCtzndStakersPool = /*#__PURE__*/ createUseReadContract({
  abi: ctzndStakersPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadCtzndStakersPoolCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadCtzndStakersPoolAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'allocation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadCtzndStakersPoolIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"investmentToken"`
 */
export const useReadCtzndStakersPoolInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'investmentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadCtzndStakersPoolInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadCtzndStakersPoolInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"project"`
 */
export const useReadCtzndStakersPoolProject =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'project',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"refundableAmount"`
 */
export const useReadCtzndStakersPoolRefundableAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'refundableAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadCtzndStakersPoolRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadCtzndStakersPoolRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadCtzndStakersPoolRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadCtzndStakersPoolRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadCtzndStakersPoolRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadCtzndStakersPoolRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadCtzndStakersPoolRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"saleSupply"`
 */
export const useReadCtzndStakersPoolSaleSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'saleSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"totalUncappedAllocations"`
 */
export const useReadCtzndStakersPoolTotalUncappedAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'totalUncappedAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadCtzndStakersPoolUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__
 */
export const useWriteCtzndStakersPool = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndStakersPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteCtzndStakersPoolInvest =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteCtzndStakersPoolRefund =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteCtzndStakersPoolRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWriteCtzndStakersPoolSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__
 */
export const useSimulateCtzndStakersPool =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndStakersPoolAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateCtzndStakersPoolInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateCtzndStakersPoolRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateCtzndStakersPoolRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulateCtzndStakersPoolSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndStakersPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStakersPoolAbi}__
 */
export const useWatchCtzndStakersPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndStakersPoolAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStakersPoolAbi}__ and `eventName` set to `"Refund"`
 */
export const useWatchCtzndStakersPoolRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStakersPoolAbi,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakingAbi}__
 */
export const useReadCtzndStaking = /*#__PURE__*/ createUseReadContract({
  abi: ctzndStakingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"UNBONDING_PERIOD"`
 */
export const useReadCtzndStakingUnbondingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakingAbi,
    functionName: 'UNBONDING_PERIOD',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"hasStaked"`
 */
export const useReadCtzndStakingHasStaked = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndStakingAbi, functionName: 'hasStaked' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"stakes"`
 */
export const useReadCtzndStakingStakes = /*#__PURE__*/ createUseReadContract({
  abi: ctzndStakingAbi,
  functionName: 'stakes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"token"`
 */
export const useReadCtzndStakingToken = /*#__PURE__*/ createUseReadContract({
  abi: ctzndStakingAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"unbondings"`
 */
export const useReadCtzndStakingUnbondings =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakingAbi,
    functionName: 'unbondings',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"withdrawable"`
 */
export const useReadCtzndStakingWithdrawable =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStakingAbi,
    functionName: 'withdrawable',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStakingAbi}__
 */
export const useWriteCtzndStaking = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndStakingAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"rebond"`
 */
export const useWriteCtzndStakingRebond = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndStakingAbi,
  functionName: 'rebond',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"stake"`
 */
export const useWriteCtzndStakingStake = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndStakingAbi,
  functionName: 'stake',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"unbond"`
 */
export const useWriteCtzndStakingUnbond = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndStakingAbi,
  functionName: 'unbond',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteCtzndStakingWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndStakingAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStakingAbi}__
 */
export const useSimulateCtzndStaking = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndStakingAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"rebond"`
 */
export const useSimulateCtzndStakingRebond =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndStakingAbi,
    functionName: 'rebond',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"stake"`
 */
export const useSimulateCtzndStakingStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndStakingAbi,
    functionName: 'stake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"unbond"`
 */
export const useSimulateCtzndStakingUnbond =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndStakingAbi,
    functionName: 'unbond',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStakingAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateCtzndStakingWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndStakingAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStakingAbi}__
 */
export const useWatchCtzndStakingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndStakingAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStakingAbi}__ and `eventName` set to `"Rebond"`
 */
export const useWatchCtzndStakingRebondEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStakingAbi,
    eventName: 'Rebond',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStakingAbi}__ and `eventName` set to `"StakeFunds"`
 */
export const useWatchCtzndStakingStakeFundsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStakingAbi,
    eventName: 'StakeFunds',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStakingAbi}__ and `eventName` set to `"Unbond"`
 */
export const useWatchCtzndStakingUnbondEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStakingAbi,
    eventName: 'Unbond',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStakingAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const useWatchCtzndStakingWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStakingAbi,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__
 */
export const useReadCtzndStdAssertions = /*#__PURE__*/ createUseReadContract({
  abi: ctzndStdAssertionsAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCtzndStdAssertionsIsTest =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStdAssertionsAbi,
    functionName: 'IS_TEST',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__
 */
export const useWriteCtzndStdAssertions = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndStdAssertionsAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCtzndStdAssertionsFailed =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndStdAssertionsAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__
 */
export const useSimulateCtzndStdAssertions =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndStdAssertionsAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCtzndStdAssertionsFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndStdAssertionsAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__
 */
export const useWatchCtzndStdAssertionsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndStdAssertionsAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCtzndStdAssertionsLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCtzndStdAssertionsLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchCtzndStdAssertionsLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCtzndStdAssertionsLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCtzndStdAssertionsLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCtzndStdAssertionsLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCtzndStdAssertionsLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchCtzndStdAssertionsLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCtzndStdAssertionsLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCtzndStdAssertionsLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCtzndStdAssertionsLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCtzndStdAssertionsLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCtzndStdAssertionsLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCtzndStdAssertionsLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCtzndStdAssertionsLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCtzndStdAssertionsLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCtzndStdAssertionsLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndStdAssertionsAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCtzndStdAssertionsLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndStdAssertionsAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdInvariantAbi}__
 */
export const useReadCtzndStdInvariant = /*#__PURE__*/ createUseReadContract({
  abi: ctzndStdInvariantAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdInvariantAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadCtzndStdInvariantExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStdInvariantAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdInvariantAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadCtzndStdInvariantExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStdInvariantAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdInvariantAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadCtzndStdInvariantExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStdInvariantAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdInvariantAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadCtzndStdInvariantTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStdInvariantAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdInvariantAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadCtzndStdInvariantTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStdInvariantAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdInvariantAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadCtzndStdInvariantTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStdInvariantAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdInvariantAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadCtzndStdInvariantTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStdInvariantAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdInvariantAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadCtzndStdInvariantTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStdInvariantAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndStdInvariantAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadCtzndStdInvariantTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndStdInvariantAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestAbi}__
 */
export const useReadCtzndTest = /*#__PURE__*/ createUseReadContract({
  abi: ctzndTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadCtzndTestIsTest = /*#__PURE__*/ createUseReadContract({
  abi: ctzndTestAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadCtzndTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadCtzndTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadCtzndTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadCtzndTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadCtzndTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadCtzndTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadCtzndTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadCtzndTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadCtzndTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestAbi}__
 */
export const useWriteCtzndTest = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteCtzndTestFailed = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndTestAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestAbi}__
 */
export const useSimulateCtzndTest = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndTestAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateCtzndTestFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__
 */
export const useWatchCtzndTestEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: ctzndTestAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchCtzndTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchCtzndTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchCtzndTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchCtzndTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchCtzndTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchCtzndTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchCtzndTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchCtzndTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchCtzndTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchCtzndTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchCtzndTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchCtzndTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchCtzndTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchCtzndTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchCtzndTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchCtzndTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchCtzndTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchCtzndTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__
 */
export const useReadCtzndTestPool = /*#__PURE__*/ createUseReadContract({
  abi: ctzndTestPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadCtzndTestPoolCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"allocation"`
 */
export const useReadCtzndTestPoolAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'allocation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadCtzndTestPoolIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"investmentToken"`
 */
export const useReadCtzndTestPoolInvestmentToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'investmentToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadCtzndTestPoolInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadCtzndTestPoolInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"project"`
 */
export const useReadCtzndTestPoolProject = /*#__PURE__*/ createUseReadContract({
  abi: ctzndTestPoolAbi,
  functionName: 'project',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"refundableAmount"`
 */
export const useReadCtzndTestPoolRefundableAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'refundableAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadCtzndTestPoolRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadCtzndTestPoolRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadCtzndTestPoolRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadCtzndTestPoolRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadCtzndTestPoolRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadCtzndTestPoolRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadCtzndTestPoolRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"saleSupply"`
 */
export const useReadCtzndTestPoolSaleSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'saleSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"totalUncappedAllocations"`
 */
export const useReadCtzndTestPoolTotalUncappedAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'totalUncappedAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"uncappedAllocation"`
 */
export const useReadCtzndTestPoolUncappedAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestPoolAbi,
    functionName: 'uncappedAllocation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__
 */
export const useWriteCtzndTestPool = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndTestPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteCtzndTestPoolInvest = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndTestPoolAbi, functionName: 'invest' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteCtzndTestPoolRefund = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndTestPoolAbi, functionName: 'refund' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteCtzndTestPoolRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndTestPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useWriteCtzndTestPoolSetIndividualCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndTestPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__
 */
export const useSimulateCtzndTestPool = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndTestPoolAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateCtzndTestPoolInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestPoolAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateCtzndTestPoolRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestPoolAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateCtzndTestPoolRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestPoolAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `functionName` set to `"setIndividualCap"`
 */
export const useSimulateCtzndTestPoolSetIndividualCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestPoolAbi,
    functionName: 'setIndividualCap',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestPoolAbi}__
 */
export const useWatchCtzndTestPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndTestPoolAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndTestPoolAbi}__ and `eventName` set to `"Refund"`
 */
export const useWatchCtzndTestPoolRefundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndTestPoolAbi,
    eventName: 'Refund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__
 */
export const useReadCtzndTestProjectVoting =
  /*#__PURE__*/ createUseReadContract({ abi: ctzndTestProjectVotingAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"numSlots"`
 */
export const useReadCtzndTestProjectVotingNumSlots =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'numSlots',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"projectToVotesIndex"`
 */
export const useReadCtzndTestProjectVotingProjectToVotesIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'projectToVotesIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"projectVoteCount"`
 */
export const useReadCtzndTestProjectVotingProjectVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'projectVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"projectVoting_finalBonus"`
 */
export const useReadCtzndTestProjectVotingProjectVotingFinalBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'projectVoting_finalBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"projectVoting_initialBonus"`
 */
export const useReadCtzndTestProjectVotingProjectVotingInitialBonus =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'projectVoting_initialBonus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"projectVoting_projects"`
 */
export const useReadCtzndTestProjectVotingProjectVotingProjects =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'projectVoting_projects',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"projectVoting_singleSlotDuration"`
 */
export const useReadCtzndTestProjectVotingProjectVotingSingleSlotDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'projectVoting_singleSlotDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"projectVoting_voteLimitPerUser"`
 */
export const useReadCtzndTestProjectVotingProjectVotingVoteLimitPerUser =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'projectVoting_voteLimitPerUser',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"projectVoting_votingPeriod"`
 */
export const useReadCtzndTestProjectVotingProjectVotingVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'projectVoting_votingPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"projects"`
 */
export const useReadCtzndTestProjectVotingProjects =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'projects',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"test_calculateWeightedVote"`
 */
export const useReadCtzndTestProjectVotingTestCalculateWeightedVote =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'test_calculateWeightedVote',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"test_getWinners"`
 */
export const useReadCtzndTestProjectVotingTestGetWinners =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'test_getWinners',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"test_sortVotes"`
 */
export const useReadCtzndTestProjectVotingTestSortVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'test_sortVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"userHasVotedForProject"`
 */
export const useReadCtzndTestProjectVotingUserHasVotedForProject =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'userHasVotedForProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"userVoteCount"`
 */
export const useReadCtzndTestProjectVotingUserVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'userVoteCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"votes"`
 */
export const useReadCtzndTestProjectVotingVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'votes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"votesIndexToProject"`
 */
export const useReadCtzndTestProjectVotingVotesIndexToProject =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'votesIndexToProject',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"votingPeriod"`
 */
export const useReadCtzndTestProjectVotingVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"weightedProjectVoteCount"`
 */
export const useReadCtzndTestProjectVotingWeightedProjectVoteCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'weightedProjectVoteCount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__
 */
export const useWriteCtzndTestProjectVoting =
  /*#__PURE__*/ createUseWriteContract({ abi: ctzndTestProjectVotingAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"test_vote"`
 */
export const useWriteCtzndTestProjectVotingTestVote =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'test_vote',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__
 */
export const useSimulateCtzndTestProjectVoting =
  /*#__PURE__*/ createUseSimulateContract({ abi: ctzndTestProjectVotingAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestProjectVotingAbi}__ and `functionName` set to `"test_vote"`
 */
export const useSimulateCtzndTestProjectVotingTestVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestProjectVotingAbi,
    functionName: 'test_vote',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__
 */
export const useReadCtzndTestRisingTideWithCustomAmounts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadCtzndTestRisingTideWithCustomAmountsCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadCtzndTestRisingTideWithCustomAmountsIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadCtzndTestRisingTideWithCustomAmountsInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadCtzndTestRisingTideWithCustomAmountsInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadCtzndTestRisingTideWithCustomAmountsRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadCtzndTestRisingTideWithCustomAmountsRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadCtzndTestRisingTideWithCustomAmountsRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadCtzndTestRisingTideWithCustomAmountsRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadCtzndTestRisingTideWithCustomAmountsRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadCtzndTestRisingTideWithCustomAmountsRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadCtzndTestRisingTideWithCustomAmountsRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__
 */
export const useWriteCtzndTestRisingTideWithCustomAmounts =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteCtzndTestRisingTideWithCustomAmountsRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"setCap"`
 */
export const useWriteCtzndTestRisingTideWithCustomAmountsSetCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'setCap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"test_invest"`
 */
export const useWriteCtzndTestRisingTideWithCustomAmountsTestInvest =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'test_invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__
 */
export const useSimulateCtzndTestRisingTideWithCustomAmounts =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateCtzndTestRisingTideWithCustomAmountsRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"setCap"`
 */
export const useSimulateCtzndTestRisingTideWithCustomAmountsSetCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'setCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestRisingTideWithCustomAmountsAbi}__ and `functionName` set to `"test_invest"`
 */
export const useSimulateCtzndTestRisingTideWithCustomAmountsTestInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestRisingTideWithCustomAmountsAbi,
    functionName: 'test_invest',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__
 */
export const useReadCtzndTestRisingTideWithStaticAmounts =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"CAP_VALIDATION_GAS_LIMIT"`
 */
export const useReadCtzndTestRisingTideWithStaticAmountsCapValidationGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'CAP_VALIDATION_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"individualCap"`
 */
export const useReadCtzndTestRisingTideWithStaticAmountsIndividualCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'individualCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"investorAmountAt"`
 */
export const useReadCtzndTestRisingTideWithStaticAmountsInvestorAmountAt =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'investorAmountAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"investorCount"`
 */
export const useReadCtzndTestRisingTideWithStaticAmountsInvestorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'investorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTideCache"`
 */
export const useReadCtzndTestRisingTideWithStaticAmountsRisingTideCache =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'risingTideCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTideState"`
 */
export const useReadCtzndTestRisingTideWithStaticAmountsRisingTideState =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'risingTideState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_applyCap"`
 */
export const useReadCtzndTestRisingTideWithStaticAmountsRisingTideApplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_applyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_isValidCap"`
 */
export const useReadCtzndTestRisingTideWithStaticAmountsRisingTideIsValidCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_isValidCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_totalAllocatedUncapped"`
 */
export const useReadCtzndTestRisingTideWithStaticAmountsRisingTideTotalAllocatedUncapped =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_totalAllocatedUncapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_totalCap"`
 */
export const useReadCtzndTestRisingTideWithStaticAmountsRisingTideTotalCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_totalCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_validating"`
 */
export const useReadCtzndTestRisingTideWithStaticAmountsRisingTideValidating =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_validating',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__
 */
export const useWriteCtzndTestRisingTideWithStaticAmounts =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useWriteCtzndTestRisingTideWithStaticAmountsRisingTideValidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"setCap"`
 */
export const useWriteCtzndTestRisingTideWithStaticAmountsSetCap =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'setCap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__
 */
export const useSimulateCtzndTestRisingTideWithStaticAmounts =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"risingTide_validate"`
 */
export const useSimulateCtzndTestRisingTideWithStaticAmountsRisingTideValidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'risingTide_validate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndTestRisingTideWithStaticAmountsAbi}__ and `functionName` set to `"setCap"`
 */
export const useSimulateCtzndTestRisingTideWithStaticAmountsSetCap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndTestRisingTideWithStaticAmountsAbi,
    functionName: 'setCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__
 */
export const useReadCtzndVesting = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVestingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadCtzndVestingDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"PRIVATE_SALE_MAX_CLIFF_MONTHS"`
 */
export const useReadCtzndVestingPrivateSaleMaxCliffMonths =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'PRIVATE_SALE_MAX_CLIFF_MONTHS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"SALE_MANAGER_ROLE"`
 */
export const useReadCtzndVestingSaleManagerRole =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'SALE_MANAGER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"claimable"`
 */
export const useReadCtzndVestingClaimable = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndVestingAbi, functionName: 'claimable' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"claimablePrivate"`
 */
export const useReadCtzndVestingClaimablePrivate =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'claimablePrivate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"claimablePublic"`
 */
export const useReadCtzndVestingClaimablePublic =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'claimablePublic',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"claimed"`
 */
export const useReadCtzndVestingClaimed = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVestingAbi,
  functionName: 'claimed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadCtzndVestingGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadCtzndVestingHasRole = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVestingAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"privateAllocations"`
 */
export const useReadCtzndVestingPrivateAllocations =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'privateAllocations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"privateSaleCap"`
 */
export const useReadCtzndVestingPrivateSaleCap =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'privateSaleCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"publicSaleCliffMonths"`
 */
export const useReadCtzndVestingPublicSaleCliffMonths =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'publicSaleCliffMonths',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"publicSaleVestingMonths"`
 */
export const useReadCtzndVestingPublicSaleVestingMonths =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'publicSaleVestingMonths',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"sales"`
 */
export const useReadCtzndVestingSales = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVestingAbi,
  functionName: 'sales',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"startTime"`
 */
export const useReadCtzndVestingStartTime = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndVestingAbi, functionName: 'startTime' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCtzndVestingSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"token"`
 */
export const useReadCtzndVestingToken = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVestingAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"totalAllocated"`
 */
export const useReadCtzndVestingTotalAllocated =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'totalAllocated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"totalAllocatedPrivate"`
 */
export const useReadCtzndVestingTotalAllocatedPrivate =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'totalAllocatedPrivate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"totalAllocatedPublic"`
 */
export const useReadCtzndVestingTotalAllocatedPublic =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'totalAllocatedPublic',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"totalPrivateSales"`
 */
export const useReadCtzndVestingTotalPrivateSales =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'totalPrivateSales',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"usedNonces"`
 */
export const useReadCtzndVestingUsedNonces =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVestingAbi,
    functionName: 'usedNonces',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVestingAbi}__
 */
export const useWriteCtzndVesting = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVestingAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"addSale"`
 */
export const useWriteCtzndVestingAddSale = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndVestingAbi, functionName: 'addSale' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"claim"`
 */
export const useWriteCtzndVestingClaim = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVestingAbi,
  functionName: 'claim',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"createPrivateSaleVest"`
 */
export const useWriteCtzndVestingCreatePrivateSaleVest =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVestingAbi,
    functionName: 'createPrivateSaleVest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteCtzndVestingGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVestingAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteCtzndVestingRefund = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVestingAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteCtzndVestingRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVestingAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteCtzndVestingRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVestingAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"setStartTime"`
 */
export const useWriteCtzndVestingSetStartTime =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVestingAbi,
    functionName: 'setStartTime',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVestingAbi}__
 */
export const useSimulateCtzndVesting = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVestingAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"addSale"`
 */
export const useSimulateCtzndVestingAddSale =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVestingAbi,
    functionName: 'addSale',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"claim"`
 */
export const useSimulateCtzndVestingClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVestingAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"createPrivateSaleVest"`
 */
export const useSimulateCtzndVestingCreatePrivateSaleVest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVestingAbi,
    functionName: 'createPrivateSaleVest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateCtzndVestingGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVestingAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateCtzndVestingRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVestingAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateCtzndVestingRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVestingAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateCtzndVestingRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVestingAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVestingAbi}__ and `functionName` set to `"setStartTime"`
 */
export const useSimulateCtzndVestingSetStartTime =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVestingAbi,
    functionName: 'setStartTime',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndVestingAbi}__
 */
export const useWatchCtzndVestingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndVestingAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndVestingAbi}__ and `eventName` set to `"AddSale"`
 */
export const useWatchCtzndVestingAddSaleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndVestingAbi,
    eventName: 'AddSale',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndVestingAbi}__ and `eventName` set to `"ClaimVesting"`
 */
export const useWatchCtzndVestingClaimVestingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndVestingAbi,
    eventName: 'ClaimVesting',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndVestingAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchCtzndVestingRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndVestingAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndVestingAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchCtzndVestingRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndVestingAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndVestingAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchCtzndVestingRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndVestingAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__
 */
export const useReadCtzndVm = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"activeFork"`
 */
export const useReadCtzndVmActiveFork = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'activeFork',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"addr"`
 */
export const useReadCtzndVmAddr = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'addr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"assume"`
 */
export const useReadCtzndVmAssume = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'assume',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"computeCreate2Address"`
 */
export const useReadCtzndVmComputeCreate2Address =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'computeCreate2Address',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"computeCreateAddress"`
 */
export const useReadCtzndVmComputeCreateAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'computeCreateAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"deriveKey"`
 */
export const useReadCtzndVmDeriveKey = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'deriveKey',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"envAddress"`
 */
export const useReadCtzndVmEnvAddress = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'envAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"envBool"`
 */
export const useReadCtzndVmEnvBool = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'envBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"envBytes"`
 */
export const useReadCtzndVmEnvBytes = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'envBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"envBytes32"`
 */
export const useReadCtzndVmEnvBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'envBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"envInt"`
 */
export const useReadCtzndVmEnvInt = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'envInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"envOr"`
 */
export const useReadCtzndVmEnvOr = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"envString"`
 */
export const useReadCtzndVmEnvString = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'envString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"envUint"`
 */
export const useReadCtzndVmEnvUint = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'envUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"fsMetadata"`
 */
export const useReadCtzndVmFsMetadata = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'fsMetadata',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadCtzndVmGetBlockNumber = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndVmAbi, functionName: 'getBlockNumber' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getBlockTimestamp"`
 */
export const useReadCtzndVmGetBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'getBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getCode"`
 */
export const useReadCtzndVmGetCode = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'getCode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getDeployedCode"`
 */
export const useReadCtzndVmGetDeployedCode =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'getDeployedCode',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getLabel"`
 */
export const useReadCtzndVmGetLabel = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useReadCtzndVmGetNonce = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"isPersistent"`
 */
export const useReadCtzndVmIsPersistent = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'isPersistent',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"keyExists"`
 */
export const useReadCtzndVmKeyExists = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'keyExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"load"`
 */
export const useReadCtzndVmLoad = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'load',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseAddress"`
 */
export const useReadCtzndVmParseAddress = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'parseAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseBool"`
 */
export const useReadCtzndVmParseBool = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'parseBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseBytes"`
 */
export const useReadCtzndVmParseBytes = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'parseBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseBytes32"`
 */
export const useReadCtzndVmParseBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'parseBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseInt"`
 */
export const useReadCtzndVmParseInt = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'parseInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJson"`
 */
export const useReadCtzndVmParseJson = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'parseJson',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonAddress"`
 */
export const useReadCtzndVmParseJsonAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'parseJsonAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonAddressArray"`
 */
export const useReadCtzndVmParseJsonAddressArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'parseJsonAddressArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonBool"`
 */
export const useReadCtzndVmParseJsonBool = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'parseJsonBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonBoolArray"`
 */
export const useReadCtzndVmParseJsonBoolArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'parseJsonBoolArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonBytes"`
 */
export const useReadCtzndVmParseJsonBytes = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndVmAbi, functionName: 'parseJsonBytes' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonBytes32"`
 */
export const useReadCtzndVmParseJsonBytes32 =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'parseJsonBytes32',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonBytes32Array"`
 */
export const useReadCtzndVmParseJsonBytes32Array =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'parseJsonBytes32Array',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonBytesArray"`
 */
export const useReadCtzndVmParseJsonBytesArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'parseJsonBytesArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonInt"`
 */
export const useReadCtzndVmParseJsonInt = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'parseJsonInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonIntArray"`
 */
export const useReadCtzndVmParseJsonIntArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'parseJsonIntArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonKeys"`
 */
export const useReadCtzndVmParseJsonKeys = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'parseJsonKeys',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonString"`
 */
export const useReadCtzndVmParseJsonString =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'parseJsonString',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonStringArray"`
 */
export const useReadCtzndVmParseJsonStringArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'parseJsonStringArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonUint"`
 */
export const useReadCtzndVmParseJsonUint = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'parseJsonUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseJsonUintArray"`
 */
export const useReadCtzndVmParseJsonUintArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmAbi,
    functionName: 'parseJsonUintArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"parseUint"`
 */
export const useReadCtzndVmParseUint = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'parseUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"projectRoot"`
 */
export const useReadCtzndVmProjectRoot = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'projectRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"readDir"`
 */
export const useReadCtzndVmReadDir = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'readDir',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"readFile"`
 */
export const useReadCtzndVmReadFile = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'readFile',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"readFileBinary"`
 */
export const useReadCtzndVmReadFileBinary = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndVmAbi, functionName: 'readFileBinary' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"readLine"`
 */
export const useReadCtzndVmReadLine = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'readLine',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"readLink"`
 */
export const useReadCtzndVmReadLink = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'readLink',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"rpcUrl"`
 */
export const useReadCtzndVmRpcUrl = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'rpcUrl',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"rpcUrlStructs"`
 */
export const useReadCtzndVmRpcUrlStructs = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'rpcUrlStructs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"rpcUrls"`
 */
export const useReadCtzndVmRpcUrls = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'rpcUrls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"sign"`
 */
export const useReadCtzndVmSign = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"signP256"`
 */
export const useReadCtzndVmSignP256 = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'signP256',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"toBase64"`
 */
export const useReadCtzndVmToBase64 = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'toBase64',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"toBase64URL"`
 */
export const useReadCtzndVmToBase64Url = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'toBase64URL',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"toString"`
 */
export const useReadCtzndVmToString = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmAbi,
  functionName: 'toString',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__
 */
export const useWriteCtzndVm = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"accesses"`
 */
export const useWriteCtzndVmAccesses = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"allowCheatcodes"`
 */
export const useWriteCtzndVmAllowCheatcodes =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'allowCheatcodes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useWriteCtzndVmBreakpoint = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"broadcast"`
 */
export const useWriteCtzndVmBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"chainId"`
 */
export const useWriteCtzndVmChainId = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'chainId',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"clearMockedCalls"`
 */
export const useWriteCtzndVmClearMockedCalls =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'clearMockedCalls',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"closeFile"`
 */
export const useWriteCtzndVmCloseFile = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"coinbase"`
 */
export const useWriteCtzndVmCoinbase = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'coinbase',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"copyFile"`
 */
export const useWriteCtzndVmCopyFile = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"createDir"`
 */
export const useWriteCtzndVmCreateDir = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"createFork"`
 */
export const useWriteCtzndVmCreateFork = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'createFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"createSelectFork"`
 */
export const useWriteCtzndVmCreateSelectFork =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'createSelectFork',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"createWallet"`
 */
export const useWriteCtzndVmCreateWallet = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndVmAbi, functionName: 'createWallet' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"deal"`
 */
export const useWriteCtzndVmDeal = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'deal',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"deleteSnapshot"`
 */
export const useWriteCtzndVmDeleteSnapshot =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'deleteSnapshot',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"deleteSnapshots"`
 */
export const useWriteCtzndVmDeleteSnapshots =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'deleteSnapshots',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"difficulty"`
 */
export const useWriteCtzndVmDifficulty = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'difficulty',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"dumpState"`
 */
export const useWriteCtzndVmDumpState = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'dumpState',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"etch"`
 */
export const useWriteCtzndVmEtch = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'etch',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useWriteCtzndVmEthGetLogs = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"exists"`
 */
export const useWriteCtzndVmExists = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectCall"`
 */
export const useWriteCtzndVmExpectCall = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'expectCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectCallMinGas"`
 */
export const useWriteCtzndVmExpectCallMinGas =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'expectCallMinGas',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectEmit"`
 */
export const useWriteCtzndVmExpectEmit = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'expectEmit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectRevert"`
 */
export const useWriteCtzndVmExpectRevert = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndVmAbi, functionName: 'expectRevert' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectSafeMemory"`
 */
export const useWriteCtzndVmExpectSafeMemory =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'expectSafeMemory',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectSafeMemoryCall"`
 */
export const useWriteCtzndVmExpectSafeMemoryCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'expectSafeMemoryCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"fee"`
 */
export const useWriteCtzndVmFee = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"ffi"`
 */
export const useWriteCtzndVmFfi = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useWriteCtzndVmGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useWriteCtzndVmGetMappingLength =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useWriteCtzndVmGetMappingSlotAt =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useWriteCtzndVmGetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useWriteCtzndVmGetRecordedLogs =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"isDir"`
 */
export const useWriteCtzndVmIsDir = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"isFile"`
 */
export const useWriteCtzndVmIsFile = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"label"`
 */
export const useWriteCtzndVmLabel = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"loadAllocs"`
 */
export const useWriteCtzndVmLoadAllocs = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'loadAllocs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"makePersistent"`
 */
export const useWriteCtzndVmMakePersistent =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'makePersistent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"mockCall"`
 */
export const useWriteCtzndVmMockCall = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'mockCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"mockCallRevert"`
 */
export const useWriteCtzndVmMockCallRevert =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'mockCallRevert',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useWriteCtzndVmPauseGasMetering =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"prank"`
 */
export const useWriteCtzndVmPrank = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'prank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"prevrandao"`
 */
export const useWriteCtzndVmPrevrandao = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'prevrandao',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"readCallers"`
 */
export const useWriteCtzndVmReadCallers = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'readCallers',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"record"`
 */
export const useWriteCtzndVmRecord = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useWriteCtzndVmRecordLogs = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useWriteCtzndVmRememberKey = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'rememberKey',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"removeDir"`
 */
export const useWriteCtzndVmRemoveDir = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"removeFile"`
 */
export const useWriteCtzndVmRemoveFile = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"resetNonce"`
 */
export const useWriteCtzndVmResetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'resetNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useWriteCtzndVmResumeGasMetering =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"revertTo"`
 */
export const useWriteCtzndVmRevertTo = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'revertTo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"revertToAndDelete"`
 */
export const useWriteCtzndVmRevertToAndDelete =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'revertToAndDelete',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"revokePersistent"`
 */
export const useWriteCtzndVmRevokePersistent =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'revokePersistent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"roll"`
 */
export const useWriteCtzndVmRoll = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'roll',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"rollFork"`
 */
export const useWriteCtzndVmRollFork = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'rollFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"rpc"`
 */
export const useWriteCtzndVmRpc = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"selectFork"`
 */
export const useWriteCtzndVmSelectFork = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'selectFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useWriteCtzndVmSerializeAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useWriteCtzndVmSerializeBool =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'serializeBool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useWriteCtzndVmSerializeBytes =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useWriteCtzndVmSerializeBytes32 =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useWriteCtzndVmSerializeInt = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndVmAbi, functionName: 'serializeInt' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useWriteCtzndVmSerializeJson =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'serializeJson',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeString"`
 */
export const useWriteCtzndVmSerializeString =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useWriteCtzndVmSerializeUint =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'serializeUint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"setEnv"`
 */
export const useWriteCtzndVmSetEnv = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"setNonce"`
 */
export const useWriteCtzndVmSetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'setNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"setNonceUnsafe"`
 */
export const useWriteCtzndVmSetNonceUnsafe =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'setNonceUnsafe',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"sign"`
 */
export const useWriteCtzndVmSign = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"skip"`
 */
export const useWriteCtzndVmSkip = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"sleep"`
 */
export const useWriteCtzndVmSleep = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"snapshot"`
 */
export const useWriteCtzndVmSnapshot = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'snapshot',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useWriteCtzndVmStartBroadcast =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useWriteCtzndVmStartMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"startPrank"`
 */
export const useWriteCtzndVmStartPrank = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'startPrank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useWriteCtzndVmStartStateDiffRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useWriteCtzndVmStopAndReturnStateDiff =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useWriteCtzndVmStopBroadcast =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'stopBroadcast',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useWriteCtzndVmStopMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"stopPrank"`
 */
export const useWriteCtzndVmStopPrank = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'stopPrank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"store"`
 */
export const useWriteCtzndVmStore = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'store',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"transact"`
 */
export const useWriteCtzndVmTransact = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'transact',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useWriteCtzndVmTryFfi = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"txGasPrice"`
 */
export const useWriteCtzndVmTxGasPrice = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'txGasPrice',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"unixTime"`
 */
export const useWriteCtzndVmUnixTime = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"warp"`
 */
export const useWriteCtzndVmWarp = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'warp',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"writeFile"`
 */
export const useWriteCtzndVmWriteFile = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useWriteCtzndVmWriteFileBinary =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"writeJson"`
 */
export const useWriteCtzndVmWriteJson = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"writeLine"`
 */
export const useWriteCtzndVmWriteLine = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__
 */
export const useSimulateCtzndVm = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"accesses"`
 */
export const useSimulateCtzndVmAccesses =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'accesses',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"allowCheatcodes"`
 */
export const useSimulateCtzndVmAllowCheatcodes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'allowCheatcodes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useSimulateCtzndVmBreakpoint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'breakpoint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"broadcast"`
 */
export const useSimulateCtzndVmBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'broadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"chainId"`
 */
export const useSimulateCtzndVmChainId =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'chainId',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"clearMockedCalls"`
 */
export const useSimulateCtzndVmClearMockedCalls =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'clearMockedCalls',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"closeFile"`
 */
export const useSimulateCtzndVmCloseFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'closeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"coinbase"`
 */
export const useSimulateCtzndVmCoinbase =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'coinbase',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"copyFile"`
 */
export const useSimulateCtzndVmCopyFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'copyFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"createDir"`
 */
export const useSimulateCtzndVmCreateDir =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'createDir',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"createFork"`
 */
export const useSimulateCtzndVmCreateFork =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'createFork',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"createSelectFork"`
 */
export const useSimulateCtzndVmCreateSelectFork =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'createSelectFork',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"createWallet"`
 */
export const useSimulateCtzndVmCreateWallet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'createWallet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"deal"`
 */
export const useSimulateCtzndVmDeal = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'deal',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"deleteSnapshot"`
 */
export const useSimulateCtzndVmDeleteSnapshot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'deleteSnapshot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"deleteSnapshots"`
 */
export const useSimulateCtzndVmDeleteSnapshots =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'deleteSnapshots',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"difficulty"`
 */
export const useSimulateCtzndVmDifficulty =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'difficulty',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"dumpState"`
 */
export const useSimulateCtzndVmDumpState =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'dumpState',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"etch"`
 */
export const useSimulateCtzndVmEtch = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'etch',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useSimulateCtzndVmEthGetLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'eth_getLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"exists"`
 */
export const useSimulateCtzndVmExists = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndVmAbi, functionName: 'exists' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectCall"`
 */
export const useSimulateCtzndVmExpectCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'expectCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectCallMinGas"`
 */
export const useSimulateCtzndVmExpectCallMinGas =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'expectCallMinGas',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectEmit"`
 */
export const useSimulateCtzndVmExpectEmit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'expectEmit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectRevert"`
 */
export const useSimulateCtzndVmExpectRevert =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'expectRevert',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectSafeMemory"`
 */
export const useSimulateCtzndVmExpectSafeMemory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'expectSafeMemory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"expectSafeMemoryCall"`
 */
export const useSimulateCtzndVmExpectSafeMemoryCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'expectSafeMemoryCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"fee"`
 */
export const useSimulateCtzndVmFee = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"ffi"`
 */
export const useSimulateCtzndVmFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useSimulateCtzndVmGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useSimulateCtzndVmGetMappingLength =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useSimulateCtzndVmGetMappingSlotAt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useSimulateCtzndVmGetNonce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'getNonce',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useSimulateCtzndVmGetRecordedLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"isDir"`
 */
export const useSimulateCtzndVmIsDir = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"isFile"`
 */
export const useSimulateCtzndVmIsFile = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndVmAbi, functionName: 'isFile' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"label"`
 */
export const useSimulateCtzndVmLabel = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"loadAllocs"`
 */
export const useSimulateCtzndVmLoadAllocs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'loadAllocs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"makePersistent"`
 */
export const useSimulateCtzndVmMakePersistent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'makePersistent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"mockCall"`
 */
export const useSimulateCtzndVmMockCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'mockCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"mockCallRevert"`
 */
export const useSimulateCtzndVmMockCallRevert =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'mockCallRevert',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useSimulateCtzndVmPauseGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"prank"`
 */
export const useSimulateCtzndVmPrank = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'prank',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"prevrandao"`
 */
export const useSimulateCtzndVmPrevrandao =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'prevrandao',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"readCallers"`
 */
export const useSimulateCtzndVmReadCallers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'readCallers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"record"`
 */
export const useSimulateCtzndVmRecord = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndVmAbi, functionName: 'record' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useSimulateCtzndVmRecordLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'recordLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useSimulateCtzndVmRememberKey =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'rememberKey',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"removeDir"`
 */
export const useSimulateCtzndVmRemoveDir =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'removeDir',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"removeFile"`
 */
export const useSimulateCtzndVmRemoveFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'removeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"resetNonce"`
 */
export const useSimulateCtzndVmResetNonce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'resetNonce',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useSimulateCtzndVmResumeGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"revertTo"`
 */
export const useSimulateCtzndVmRevertTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'revertTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"revertToAndDelete"`
 */
export const useSimulateCtzndVmRevertToAndDelete =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'revertToAndDelete',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"revokePersistent"`
 */
export const useSimulateCtzndVmRevokePersistent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'revokePersistent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"roll"`
 */
export const useSimulateCtzndVmRoll = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'roll',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"rollFork"`
 */
export const useSimulateCtzndVmRollFork =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'rollFork',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"rpc"`
 */
export const useSimulateCtzndVmRpc = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"selectFork"`
 */
export const useSimulateCtzndVmSelectFork =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'selectFork',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useSimulateCtzndVmSerializeAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useSimulateCtzndVmSerializeBool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'serializeBool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useSimulateCtzndVmSerializeBytes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useSimulateCtzndVmSerializeBytes32 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useSimulateCtzndVmSerializeInt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'serializeInt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useSimulateCtzndVmSerializeJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'serializeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeString"`
 */
export const useSimulateCtzndVmSerializeString =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useSimulateCtzndVmSerializeUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'serializeUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"setEnv"`
 */
export const useSimulateCtzndVmSetEnv = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndVmAbi, functionName: 'setEnv' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"setNonce"`
 */
export const useSimulateCtzndVmSetNonce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'setNonce',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"setNonceUnsafe"`
 */
export const useSimulateCtzndVmSetNonceUnsafe =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'setNonceUnsafe',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"sign"`
 */
export const useSimulateCtzndVmSign = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"skip"`
 */
export const useSimulateCtzndVmSkip = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"sleep"`
 */
export const useSimulateCtzndVmSleep = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"snapshot"`
 */
export const useSimulateCtzndVmSnapshot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'snapshot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useSimulateCtzndVmStartBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useSimulateCtzndVmStartMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"startPrank"`
 */
export const useSimulateCtzndVmStartPrank =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'startPrank',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useSimulateCtzndVmStartStateDiffRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useSimulateCtzndVmStopAndReturnStateDiff =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useSimulateCtzndVmStopBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'stopBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useSimulateCtzndVmStopMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"stopPrank"`
 */
export const useSimulateCtzndVmStopPrank =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'stopPrank',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"store"`
 */
export const useSimulateCtzndVmStore = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'store',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"transact"`
 */
export const useSimulateCtzndVmTransact =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'transact',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useSimulateCtzndVmTryFfi = /*#__PURE__*/ createUseSimulateContract(
  { abi: ctzndVmAbi, functionName: 'tryFfi' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"txGasPrice"`
 */
export const useSimulateCtzndVmTxGasPrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'txGasPrice',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"unixTime"`
 */
export const useSimulateCtzndVmUnixTime =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'unixTime',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"warp"`
 */
export const useSimulateCtzndVmWarp = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmAbi,
  functionName: 'warp',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"writeFile"`
 */
export const useSimulateCtzndVmWriteFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'writeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useSimulateCtzndVmWriteFileBinary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"writeJson"`
 */
export const useSimulateCtzndVmWriteJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'writeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmAbi}__ and `functionName` set to `"writeLine"`
 */
export const useSimulateCtzndVmWriteLine =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmAbi,
    functionName: 'writeLine',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__
 */
export const useReadCtzndVmSafe = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"addr"`
 */
export const useReadCtzndVmSafeAddr = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'addr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"assume"`
 */
export const useReadCtzndVmSafeAssume = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'assume',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"computeCreate2Address"`
 */
export const useReadCtzndVmSafeComputeCreate2Address =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'computeCreate2Address',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"computeCreateAddress"`
 */
export const useReadCtzndVmSafeComputeCreateAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'computeCreateAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"deriveKey"`
 */
export const useReadCtzndVmSafeDeriveKey = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'deriveKey',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"envAddress"`
 */
export const useReadCtzndVmSafeEnvAddress = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndVmSafeAbi, functionName: 'envAddress' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"envBool"`
 */
export const useReadCtzndVmSafeEnvBool = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'envBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"envBytes"`
 */
export const useReadCtzndVmSafeEnvBytes = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'envBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"envBytes32"`
 */
export const useReadCtzndVmSafeEnvBytes32 = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndVmSafeAbi, functionName: 'envBytes32' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"envInt"`
 */
export const useReadCtzndVmSafeEnvInt = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'envInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"envOr"`
 */
export const useReadCtzndVmSafeEnvOr = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"envString"`
 */
export const useReadCtzndVmSafeEnvString = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'envString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"envUint"`
 */
export const useReadCtzndVmSafeEnvUint = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'envUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"fsMetadata"`
 */
export const useReadCtzndVmSafeFsMetadata = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndVmSafeAbi, functionName: 'fsMetadata' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadCtzndVmSafeGetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getBlockTimestamp"`
 */
export const useReadCtzndVmSafeGetBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getCode"`
 */
export const useReadCtzndVmSafeGetCode = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'getCode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getDeployedCode"`
 */
export const useReadCtzndVmSafeGetDeployedCode =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getDeployedCode',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getLabel"`
 */
export const useReadCtzndVmSafeGetLabel = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useReadCtzndVmSafeGetNonce = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"keyExists"`
 */
export const useReadCtzndVmSafeKeyExists = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'keyExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"load"`
 */
export const useReadCtzndVmSafeLoad = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'load',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseAddress"`
 */
export const useReadCtzndVmSafeParseAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseBool"`
 */
export const useReadCtzndVmSafeParseBool = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'parseBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseBytes"`
 */
export const useReadCtzndVmSafeParseBytes = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndVmSafeAbi, functionName: 'parseBytes' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseBytes32"`
 */
export const useReadCtzndVmSafeParseBytes32 =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseBytes32',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseInt"`
 */
export const useReadCtzndVmSafeParseInt = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'parseInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJson"`
 */
export const useReadCtzndVmSafeParseJson = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'parseJson',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonAddress"`
 */
export const useReadCtzndVmSafeParseJsonAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonAddressArray"`
 */
export const useReadCtzndVmSafeParseJsonAddressArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonAddressArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonBool"`
 */
export const useReadCtzndVmSafeParseJsonBool =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonBool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonBoolArray"`
 */
export const useReadCtzndVmSafeParseJsonBoolArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonBoolArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonBytes"`
 */
export const useReadCtzndVmSafeParseJsonBytes =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonBytes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonBytes32"`
 */
export const useReadCtzndVmSafeParseJsonBytes32 =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonBytes32',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonBytes32Array"`
 */
export const useReadCtzndVmSafeParseJsonBytes32Array =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonBytes32Array',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonBytesArray"`
 */
export const useReadCtzndVmSafeParseJsonBytesArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonBytesArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonInt"`
 */
export const useReadCtzndVmSafeParseJsonInt =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonInt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonIntArray"`
 */
export const useReadCtzndVmSafeParseJsonIntArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonIntArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonKeys"`
 */
export const useReadCtzndVmSafeParseJsonKeys =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonKeys',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonString"`
 */
export const useReadCtzndVmSafeParseJsonString =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonString',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonStringArray"`
 */
export const useReadCtzndVmSafeParseJsonStringArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonStringArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonUint"`
 */
export const useReadCtzndVmSafeParseJsonUint =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonUint',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseJsonUintArray"`
 */
export const useReadCtzndVmSafeParseJsonUintArray =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'parseJsonUintArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"parseUint"`
 */
export const useReadCtzndVmSafeParseUint = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'parseUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"projectRoot"`
 */
export const useReadCtzndVmSafeProjectRoot =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'projectRoot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"readDir"`
 */
export const useReadCtzndVmSafeReadDir = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'readDir',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"readFile"`
 */
export const useReadCtzndVmSafeReadFile = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'readFile',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"readFileBinary"`
 */
export const useReadCtzndVmSafeReadFileBinary =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'readFileBinary',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"readLine"`
 */
export const useReadCtzndVmSafeReadLine = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'readLine',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"readLink"`
 */
export const useReadCtzndVmSafeReadLink = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'readLink',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"rpcUrl"`
 */
export const useReadCtzndVmSafeRpcUrl = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'rpcUrl',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"rpcUrlStructs"`
 */
export const useReadCtzndVmSafeRpcUrlStructs =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'rpcUrlStructs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"rpcUrls"`
 */
export const useReadCtzndVmSafeRpcUrls = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'rpcUrls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useReadCtzndVmSafeSign = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"signP256"`
 */
export const useReadCtzndVmSafeSignP256 = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'signP256',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"toBase64"`
 */
export const useReadCtzndVmSafeToBase64 = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'toBase64',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"toBase64URL"`
 */
export const useReadCtzndVmSafeToBase64Url =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndVmSafeAbi,
    functionName: 'toBase64URL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"toString"`
 */
export const useReadCtzndVmSafeToString = /*#__PURE__*/ createUseReadContract({
  abi: ctzndVmSafeAbi,
  functionName: 'toString',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__
 */
export const useWriteCtzndVmSafe = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"accesses"`
 */
export const useWriteCtzndVmSafeAccesses = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndVmSafeAbi, functionName: 'accesses' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useWriteCtzndVmSafeBreakpoint =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'breakpoint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"broadcast"`
 */
export const useWriteCtzndVmSafeBroadcast =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'broadcast',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"closeFile"`
 */
export const useWriteCtzndVmSafeCloseFile =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'closeFile',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"copyFile"`
 */
export const useWriteCtzndVmSafeCopyFile = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndVmSafeAbi, functionName: 'copyFile' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"createDir"`
 */
export const useWriteCtzndVmSafeCreateDir =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'createDir',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"createWallet"`
 */
export const useWriteCtzndVmSafeCreateWallet =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'createWallet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useWriteCtzndVmSafeEthGetLogs =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'eth_getLogs',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"exists"`
 */
export const useWriteCtzndVmSafeExists = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"ffi"`
 */
export const useWriteCtzndVmSafeFfi = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useWriteCtzndVmSafeGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useWriteCtzndVmSafeGetMappingLength =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useWriteCtzndVmSafeGetMappingSlotAt =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useWriteCtzndVmSafeGetNonce = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndVmSafeAbi, functionName: 'getNonce' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useWriteCtzndVmSafeGetRecordedLogs =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"isDir"`
 */
export const useWriteCtzndVmSafeIsDir = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"isFile"`
 */
export const useWriteCtzndVmSafeIsFile = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"label"`
 */
export const useWriteCtzndVmSafeLabel = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useWriteCtzndVmSafePauseGasMetering =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"record"`
 */
export const useWriteCtzndVmSafeRecord = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useWriteCtzndVmSafeRecordLogs =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'recordLogs',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useWriteCtzndVmSafeRememberKey =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'rememberKey',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"removeDir"`
 */
export const useWriteCtzndVmSafeRemoveDir =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'removeDir',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"removeFile"`
 */
export const useWriteCtzndVmSafeRemoveFile =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'removeFile',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useWriteCtzndVmSafeResumeGasMetering =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"rpc"`
 */
export const useWriteCtzndVmSafeRpc = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useWriteCtzndVmSafeSerializeAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useWriteCtzndVmSafeSerializeBool =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeBool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useWriteCtzndVmSafeSerializeBytes =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useWriteCtzndVmSafeSerializeBytes32 =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useWriteCtzndVmSafeSerializeInt =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeInt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useWriteCtzndVmSafeSerializeJson =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeJson',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeString"`
 */
export const useWriteCtzndVmSafeSerializeString =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useWriteCtzndVmSafeSerializeUint =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeUint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"setEnv"`
 */
export const useWriteCtzndVmSafeSetEnv = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useWriteCtzndVmSafeSign = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"sleep"`
 */
export const useWriteCtzndVmSafeSleep = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useWriteCtzndVmSafeStartBroadcast =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useWriteCtzndVmSafeStartMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useWriteCtzndVmSafeStartStateDiffRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useWriteCtzndVmSafeStopAndReturnStateDiff =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useWriteCtzndVmSafeStopBroadcast =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'stopBroadcast',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useWriteCtzndVmSafeStopMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useWriteCtzndVmSafeTryFfi = /*#__PURE__*/ createUseWriteContract({
  abi: ctzndVmSafeAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"unixTime"`
 */
export const useWriteCtzndVmSafeUnixTime = /*#__PURE__*/ createUseWriteContract(
  { abi: ctzndVmSafeAbi, functionName: 'unixTime' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"writeFile"`
 */
export const useWriteCtzndVmSafeWriteFile =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'writeFile',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useWriteCtzndVmSafeWriteFileBinary =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"writeJson"`
 */
export const useWriteCtzndVmSafeWriteJson =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'writeJson',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"writeLine"`
 */
export const useWriteCtzndVmSafeWriteLine =
  /*#__PURE__*/ createUseWriteContract({
    abi: ctzndVmSafeAbi,
    functionName: 'writeLine',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__
 */
export const useSimulateCtzndVmSafe = /*#__PURE__*/ createUseSimulateContract({
  abi: ctzndVmSafeAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"accesses"`
 */
export const useSimulateCtzndVmSafeAccesses =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'accesses',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useSimulateCtzndVmSafeBreakpoint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'breakpoint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"broadcast"`
 */
export const useSimulateCtzndVmSafeBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'broadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"closeFile"`
 */
export const useSimulateCtzndVmSafeCloseFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'closeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"copyFile"`
 */
export const useSimulateCtzndVmSafeCopyFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'copyFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"createDir"`
 */
export const useSimulateCtzndVmSafeCreateDir =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'createDir',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"createWallet"`
 */
export const useSimulateCtzndVmSafeCreateWallet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'createWallet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useSimulateCtzndVmSafeEthGetLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'eth_getLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"exists"`
 */
export const useSimulateCtzndVmSafeExists =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'exists',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"ffi"`
 */
export const useSimulateCtzndVmSafeFfi =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'ffi',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useSimulateCtzndVmSafeGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useSimulateCtzndVmSafeGetMappingLength =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useSimulateCtzndVmSafeGetMappingSlotAt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useSimulateCtzndVmSafeGetNonce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getNonce',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useSimulateCtzndVmSafeGetRecordedLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"isDir"`
 */
export const useSimulateCtzndVmSafeIsDir =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'isDir',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"isFile"`
 */
export const useSimulateCtzndVmSafeIsFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'isFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"label"`
 */
export const useSimulateCtzndVmSafeLabel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'label',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useSimulateCtzndVmSafePauseGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"record"`
 */
export const useSimulateCtzndVmSafeRecord =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'record',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useSimulateCtzndVmSafeRecordLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'recordLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useSimulateCtzndVmSafeRememberKey =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'rememberKey',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"removeDir"`
 */
export const useSimulateCtzndVmSafeRemoveDir =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'removeDir',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"removeFile"`
 */
export const useSimulateCtzndVmSafeRemoveFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'removeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useSimulateCtzndVmSafeResumeGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"rpc"`
 */
export const useSimulateCtzndVmSafeRpc =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'rpc',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useSimulateCtzndVmSafeSerializeAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useSimulateCtzndVmSafeSerializeBool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeBool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useSimulateCtzndVmSafeSerializeBytes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useSimulateCtzndVmSafeSerializeBytes32 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useSimulateCtzndVmSafeSerializeInt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeInt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useSimulateCtzndVmSafeSerializeJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeString"`
 */
export const useSimulateCtzndVmSafeSerializeString =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useSimulateCtzndVmSafeSerializeUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'serializeUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"setEnv"`
 */
export const useSimulateCtzndVmSafeSetEnv =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'setEnv',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useSimulateCtzndVmSafeSign =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'sign',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"sleep"`
 */
export const useSimulateCtzndVmSafeSleep =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'sleep',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useSimulateCtzndVmSafeStartBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useSimulateCtzndVmSafeStartMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useSimulateCtzndVmSafeStartStateDiffRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useSimulateCtzndVmSafeStopAndReturnStateDiff =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useSimulateCtzndVmSafeStopBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'stopBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useSimulateCtzndVmSafeStopMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useSimulateCtzndVmSafeTryFfi =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'tryFfi',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"unixTime"`
 */
export const useSimulateCtzndVmSafeUnixTime =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'unixTime',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"writeFile"`
 */
export const useSimulateCtzndVmSafeWriteFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'writeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useSimulateCtzndVmSafeWriteFileBinary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"writeJson"`
 */
export const useSimulateCtzndVmSafeWriteJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'writeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ctzndVmSafeAbi}__ and `functionName` set to `"writeLine"`
 */
export const useSimulateCtzndVmSafeWriteLine =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ctzndVmSafeAbi,
    functionName: 'writeLine',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndstdErrorAbi}__
 */
export const useReadCtzndstdError = /*#__PURE__*/ createUseReadContract({
  abi: ctzndstdErrorAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndstdErrorAbi}__ and `functionName` set to `"arithmeticError"`
 */
export const useReadCtzndstdErrorArithmeticError =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndstdErrorAbi,
    functionName: 'arithmeticError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndstdErrorAbi}__ and `functionName` set to `"assertionError"`
 */
export const useReadCtzndstdErrorAssertionError =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndstdErrorAbi,
    functionName: 'assertionError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndstdErrorAbi}__ and `functionName` set to `"divisionError"`
 */
export const useReadCtzndstdErrorDivisionError =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndstdErrorAbi,
    functionName: 'divisionError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndstdErrorAbi}__ and `functionName` set to `"encodeStorageError"`
 */
export const useReadCtzndstdErrorEncodeStorageError =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndstdErrorAbi,
    functionName: 'encodeStorageError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndstdErrorAbi}__ and `functionName` set to `"enumConversionError"`
 */
export const useReadCtzndstdErrorEnumConversionError =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndstdErrorAbi,
    functionName: 'enumConversionError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndstdErrorAbi}__ and `functionName` set to `"indexOOBError"`
 */
export const useReadCtzndstdErrorIndexOobError =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndstdErrorAbi,
    functionName: 'indexOOBError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndstdErrorAbi}__ and `functionName` set to `"memOverflowError"`
 */
export const useReadCtzndstdErrorMemOverflowError =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndstdErrorAbi,
    functionName: 'memOverflowError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndstdErrorAbi}__ and `functionName` set to `"popError"`
 */
export const useReadCtzndstdErrorPopError = /*#__PURE__*/ createUseReadContract(
  { abi: ctzndstdErrorAbi, functionName: 'popError' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ctzndstdErrorAbi}__ and `functionName` set to `"zeroVarError"`
 */
export const useReadCtzndstdErrorZeroVarError =
  /*#__PURE__*/ createUseReadContract({
    abi: ctzndstdErrorAbi,
    functionName: 'zeroVarError',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndstdStorageSafeAbi}__
 */
export const useWatchCtzndstdStorageSafeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ctzndstdStorageSafeAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndstdStorageSafeAbi}__ and `eventName` set to `"SlotFound"`
 */
export const useWatchCtzndstdStorageSafeSlotFoundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndstdStorageSafeAbi,
    eventName: 'SlotFound',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ctzndstdStorageSafeAbi}__ and `eventName` set to `"WARNING_UninitedSlot"`
 */
export const useWatchCtzndstdStorageSafeWarningUninitedSlotEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ctzndstdStorageSafeAbi,
    eventName: 'WARNING_UninitedSlot',
  })
